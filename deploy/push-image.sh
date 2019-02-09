#!/bin/bash          

gcloud docker -- push gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1}

if [ ${CIRCLE_BRANCH} = 'master' ]; then
    gcloud container images add-tag gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1} \
        gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:latest
else
    gcloud container images add-tag gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1} \
        gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1}-pr-`echo ${CIRCLE_PULL_REQUEST} | grep -om1 '[0-9]\+$'`
fi

gcloud container images add-tag gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1} \
    gcr.io/forgestatus/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1}-branch-`echo ${CIRCLE_BRANCH} | sed -e 's/[^a-zA-Z0-9\-]/-/g'`
