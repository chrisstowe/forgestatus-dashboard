FROM openresty/openresty:1.13.6.2-1-apline

WORKDIR /opt/app

# install app
COPY dist ./dist
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
