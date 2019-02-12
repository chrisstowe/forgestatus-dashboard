# This should only be used for development purposes.
# This was created to allow users to build and run (without installing node).
FROM node:11.9-alpine

WORKDIR /opt/app

COPY public ./public
COPY package.json .

# Copy this last, since it is likely to change the most
COPY src ./src

RUN npm i

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
