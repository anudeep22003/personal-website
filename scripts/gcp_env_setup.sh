#!/bin/bash
# Setup script for GCP infrastructure

# Exit on any error
set -e

# Check if project name is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <project-name>"
    echo "Example: $0 my-awesome-project"
    exit 1
fi

PROJECT_NAME="$1"

echo "Setting up GCP infrastructure for project: $PROJECT_NAME..."

# Check if gcloud CLI is installed
if ! command -v gcloud &> /dev/null; then
    echo "Error: Google Cloud SDK is not installed."
    echo "Please install from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Authenticate with Google Cloud
echo "Please authenticate with Google Cloud..."
gcloud auth login

# Create project
echo "Creating project $PROJECT_NAME..."
gcloud projects create "$PROJECT_NAME" --name="$PROJECT_NAME" || echo "Project may already exist, continuing..."

# Set current project
echo "Setting as the current project..."
gcloud config set project "$PROJECT_NAME"

# Check and prompt for billing account
echo "Checking for billing accounts..."
BILLING_ACCOUNTS=$(gcloud billing accounts list --format="value(name)")

if [ -z "$BILLING_ACCOUNTS" ]; then
    echo "No billing accounts found. You need to create a billing account before proceeding."
    echo "Please visit https://console.cloud.google.com/billing to set up a billing account."
    echo "After setting up billing, run this script again."
    exit 1
fi

# List available billing accounts
echo "Available billing accounts:"
gcloud billing accounts list

# Prompt for billing account ID
echo ""
echo "Please enter the billing account ID to use (e.g., XXXXXX-XXXXXX-XXXXXX):"
read BILLING_ACCOUNT_ID

# Link billing account to project
echo "Linking billing account to project..."
gcloud billing projects link "$PROJECT_NAME" --billing-account="$BILLING_ACCOUNT_ID"

# Enable required APIs
echo "Enabling required APIs..."
gcloud services enable storage-api.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com

# Create storage bucket
echo "Creating storage bucket..."
gsutil mb -l us-central1 "gs://${PROJECT_NAME}-storage" || echo "Bucket may already exist, continuing..."

# Set bucket permissions (modify as needed)
echo "Setting bucket permissions..."
gsutil iam ch allUsers:objectViewer "gs://${PROJECT_NAME}-storage"

# Create service account for backend
echo "Creating service account for backend..."
gcloud iam service-accounts create backend-service || echo "Service account may already exist, continuing..."

# Grant storage permissions
echo "Granting storage permissions to backend service..."
gsutil iam ch "serviceAccount:backend-service@${PROJECT_NAME}.iam.gserviceaccount.com:objectAdmin" "gs://${PROJECT_NAME}-storage"

# Create key file for service account
echo "Creating service account key..."
gcloud iam service-accounts keys create backend-key.json --iam-account="backend-service@${PROJECT_NAME}.iam.gserviceaccount.com"

# Create Artifact Registry repository
echo "Creating Artifact Registry repository..."
gcloud artifacts repositories create my-docker-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for $PROJECT_NAME" || echo "Repository may already exist, continuing..."

# Grant Artifact Registry permissions to backend service account
echo "Granting Artifact Registry permissions to backend service account..."
gcloud artifacts repositories add-iam-policy-binding my-docker-repo \
    --location=us-central1 \
    --member="serviceAccount:backend-service@${PROJECT_NAME}.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"

echo "Setup complete!"
echo "Your project '$PROJECT_NAME', storage bucket, and service account have been created."
echo "Service account key saved to: backend-key.json"
echo ""
echo "Next steps:"
echo "1. Deploy your frontend application"
echo "2. Deploy your backend API"
echo "3. Configure your environment variables"
