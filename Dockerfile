FROM node
VOLUME ["/usr/share/nginx/html", "/style", "/src"]
WORKDIR /src
CMD ["make"]
