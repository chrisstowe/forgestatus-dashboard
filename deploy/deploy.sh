#!/bin/bash

set -x
set -e
set -o allexport

if [ ${CIRCLE_BRANCH} = 'master' ]; then
    ENV=prod
else
    ENV=dev
fi

gcloud config set project forgestatus

echo ${GCP_SERVICE_ACCOUNT} > gcp-service-account.json

gcloud auth activate-service-account --key-file gcp-service-account.json

gcloud container clusters get-credentials forgestatus-cluster

envsubst < ./deploy/deployment.in.yaml > ./deploy/deployment.out.yaml
kubectl apply -f ./deploy/deployment.out.yaml

envsubst < ./deploy/service.in.yaml > ./deploy/service.out.yaml
kubectl apply -f ./deploy/service.out.yaml

envsubst < ./deploy/ingress.in.yaml > ./deploy/ingress.out.yaml
kubectl apply -f ./deploy/ingress.out.yaml
