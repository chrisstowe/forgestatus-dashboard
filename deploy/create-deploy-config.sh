#!/bin/bash

if [ ${CIRCLE_BRANCH} = 'master' ]; then
    ENV=prod
else
    ENV=dev
fi

mkdir config

envsubst < ./deploy/template.deployment.yaml > ./config/deployment.yaml
envsubst < ./deploy/template.service.yaml > ./config/service.yaml
envsubst < ./deploy/template.ingress.yaml > ./config/ingress.yaml
