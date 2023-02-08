FROM node:18-alpine AS builder
ARG CONFIGURATION='dev'
ARG ENVIRONMENT='prod'

WORKDIR /app

COPY ./ ./

RUN ls

RUN apk add g++ make py3-pip

RUN npm install -g @angular/cli@latest

RUN npx nx build librimem

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/apps/librimem /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
