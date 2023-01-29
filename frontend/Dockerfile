FROM node:17-alpine AS builder
ARG CONFIGURATION='dev'
ARG ENVIRONMENT='prod'

WORKDIR /app

COPY package.json .

RUN npm install yarn

RUN yarn

COPY ./dist/apps/librimem .

RUN npm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/apps/librimem /usr/share/nginx/html

CMD ["nginx" "-g" "daemon off;"]
