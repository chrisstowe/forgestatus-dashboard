# This should only be used for development purposes.
# This was created to allow users to build and run (without installing node).
FROM node:11.9-alpine

# Set the work dir and user for better security.
WORKDIR /opt/app
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup
USER appuser

COPY public ./public
COPY package.json .

# This is most likely to change, so copy last.
COPY src ./src

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
