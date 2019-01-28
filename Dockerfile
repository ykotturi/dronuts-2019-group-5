FROM node:8-alpine
MAINTAINER <GROUP_NAME_HERE>

# Change working directory
WORKDIR /usr/src/app

# Copy App Source and Dependencies
COPY . .

# Install App Dependencies
RUN npm install

#TODO Run any build scripts here

EXPOSE 80
EXPOSE 3000
CMD [ "npm", "start" ]
