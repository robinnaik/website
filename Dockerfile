FROM node:alpine
WORKDIR /usr/app/
ADD build build
ADD webserver webserver
RUN cd webserver && npm install
CMD ["node","webserver/server.js"]