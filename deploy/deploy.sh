#!/bin/bash

gcloud config set project forgestatus
echo ${GCP_SERVICE_ACCOUNT} > gcp-service-account.json
gcloud auth activate-service-account --key-file gcp-service-account.json
gcloud container clusters get-credentials forgestatus-cluster --zone us-west2-a

kubectl apply -f ./config/deployment.yaml
kubectl apply -f ./config/service.yaml
kubectl apply -f ./config/ingress.yaml
