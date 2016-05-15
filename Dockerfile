FROM node:argon

ENV MONGO_URI="mongodb://mongo/koenvg_be"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY ./app/package.json /usr/src/app
RUN npm install

# Bundle app source
COPY ./app /usr/src/app

CMD [ "npm", "start" ]

