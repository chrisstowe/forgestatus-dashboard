#!/bin/bash

if [ ${CIRCLE_BRANCH} = 'master' ]; then
    export ENV=prod
else
    export ENV=dev
fi

mkdir config

envsubst < ./deploy/template.deployment.yaml > ./config/deployment.yaml
envsubst < ./deploy/template.service.yaml > ./config/service.yaml
