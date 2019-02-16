# This should be used for production.
# The optimised build should run in CircleCI.
# Only the binaries should be copied here.
FROM openresty/openresty:1.13.6.2-1-alpine

# Set the work dir and user for better security.
WORKDIR /opt/app
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup
USER appuser

# Copy the static files.
COPY build ./build
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
