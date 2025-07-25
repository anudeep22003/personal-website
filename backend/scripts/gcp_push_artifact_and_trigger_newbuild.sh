#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Set variables
REGION="us-central1"
PROJECT_ID="anudeepy"
REPO_NAME="my-docker-repo"
IMAGE_NAME="my-image"
SERVICE_NAME="my-image"

# Full image path
IMAGE="us-central1-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME:latest"

echo "Building Docker image..."
# Build and push the image
docker build --platform linux/amd64 -t "$IMAGE" .

echo "Pushing Docker image to registry..."
docker push "$IMAGE"

echo "Deploying to Cloud Run..."
# Deploy to Cloud Run
gcloud run deploy "$SERVICE_NAME" \
  --image "$IMAGE" \
  --region "$REGION" \
  --platform managed \
  --quiet

echo "Deployment completed successfully!"