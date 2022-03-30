FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN apk add --no-cache build-base freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev python autoconf automake
RUN npm install &&  apk del build-base python autoconf automake
EXPOSE 3000
ENV NODE_ENV=production
RUN npm run build
CMD [ "npm", "start" ]
