#
# Monera-static-transformer
#
# VERSION                0.1.0

FROM node
MAINTAINER Mauro Mandracchia <info@ideabile.com>
LABEL Description="Get a static content (.md, .sass, .js, etc..) and create a static website." Vendor="ideabile.com" Version="1.0"
VOLUME ["/dest", "/content"]

ENV WWW=/dest
ENV MAIN=./main
ENV STYLE=./style

WORKDIR /main
ADD $MAIN/package.json /main/package.json
RUN npm install

WORKDIR /style
ADD $STYLE/package.json /style/package.json
RUN npm install

ADD $MAIN /main
ADD $STYLE /style

WORKDIR /main
ENTRYPOINT /main/node_modules/.bin/gulp
