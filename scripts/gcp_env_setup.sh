#!/bin/bash
# Setup script for ReqPal GCP infrastructure

# Exit on any error
set -e

echo "Setting up ReqPal GCP infrastructure..."

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
echo "Creating project reqpal..."
gcloud projects create reqpal --name="ReqPal" || echo "Project may already exist, continuing..."

# Set current project
echo "Setting reqpal as the current project..."
gcloud config set project reqpal

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
gcloud billing projects link reqpal --billing-account="$BILLING_ACCOUNT_ID"

# Enable required APIs
echo "Enabling required APIs..."
gcloud services enable storage-api.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com

# Create storage bucket
echo "Creating storage bucket..."
gsutil mb -l us-central1 gs://reqpal-storage || echo "Bucket may already exist, continuing..."

# Set bucket permissions (modify as needed)
echo "Setting bucket permissions..."
gsutil iam ch allUsers:objectViewer gs://reqpal-storage

# Create service account for backend
echo "Creating service account for backend..."
gcloud iam service-accounts create backend-service || echo "Service account may already exist, continuing..."

# Grant storage permissions
echo "Granting storage permissions to backend service..."
gsutil iam ch serviceAccount:backend-service@reqpal.iam.gserviceaccount.com:objectAdmin gs://reqpal-storage

# Create key file for service account
echo "Creating service account key..."
gcloud iam service-accounts keys create backend-key.json --iam-account=backend-service@reqpal.iam.gserviceaccount.com

echo "Setup complete!"
echo "Your project, storage bucket, and service account have been created."
echo "Service account key saved to: backend-key.json"
echo ""
echo "Next steps:"
echo "1. Deploy your frontend application"
echo "2. Deploy your backend API"
echo "3. Configure your environment variables"
