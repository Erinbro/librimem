# NOTE See https://blog.mayadata.io/openebs/steps-to-deploy-angular-application-on-kubernetes
FROM node:18 AS builder
ARG CONFIGURATION='dev'
ARG ENVIRONMENT='prod'

WORKDIR /app

COPY ./ ./

# RUN ls

# RUN apk add g++ make py3-pip

# RUN apk add build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

# RUN npm install canvas

RUN yarn

RUN npx nx build librimem

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/apps/librimem /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
