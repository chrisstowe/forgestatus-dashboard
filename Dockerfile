# This should be used for production.
# The optimised build should run in CircleCI.
# Only the binaries should be copied here.
FROM openresty/openresty:1.13.6.2-1-alpine

WORKDIR /opt/app

# Copy static files.
COPY build ./build
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
