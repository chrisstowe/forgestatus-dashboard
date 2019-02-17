# This should only be used for development purposes.
# This was created to allow users to build and run (without installing node).
FROM node:11.9-alpine

WORKDIR /opt/app

COPY public ./public
COPY package.json .

# This is most likely to change, so copy last.
COPY src ./src

RUN npm install

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]
