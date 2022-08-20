FROM node:16.13.0
WORKDIR /app
COPY package.json /app

ARG $NODE_ENV
RUN if [ "$NODE_ENV"="development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . /app
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","run", "dev"]