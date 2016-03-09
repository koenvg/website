FROM node:argon

# Create app directory

WORKDIR /opt/app

# Install app dependencies
COPY ./app/package.json /opt/app
RUN npm install

# Bundle app source
COPY . /opt/app

EXPOSE 3000
CMD [ "npm", "start" ]