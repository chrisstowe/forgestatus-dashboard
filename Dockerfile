FROM openresty/openresty:1.13.6.2-1-alpine

WORKDIR /opt/app

# install app
COPY build ./build
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
