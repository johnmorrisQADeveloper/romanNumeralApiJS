FROM node

MAINTAINER John Morris "johnjosemorris@morris.com"

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app

RUN cd /usr/src/app
RUN npm install mocha -g
RUN npm install request
RUN npm install assert
RUN npm install --save-dev mochawesome

CMD [ "mocha" ]