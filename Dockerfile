FROM node
VOLUME [ "/src", "/style", "/content", "/destination" ]
WORKDIR /src
CMD ["make"]
