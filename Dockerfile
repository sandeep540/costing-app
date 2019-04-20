# Multi-step Docker File Builder

# STEP 1 : Choosing the Base of our image
FROM node:alpine as builder

ARG env=prod

#Adding label for tagging purpose
LABEL maintainer="kn.sandeep@gmail.com"

#STEP 2: Updating APK for updating Alpine Docker Image
RUN apk update && apk add --no-cache make git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#  Make sure to update the package.json
# "build:prod": "ng build --prod --base-href /costing-app/"
RUN npm run build:${env}

# STEP 2 build a small nginx image with static website
FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY --from=builder  /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker build -t sandeep540/flex-costing-app .
#docker push sandeep540/flex-costing-app
#docker run -d -p 8081:80 --name flex-costing-app sandeep540/flex-costing-app
