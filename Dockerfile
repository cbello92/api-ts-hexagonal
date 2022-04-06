FROM node:14.19.1-alpine

RUN apk update

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn install

#COPY src /app/src

COPY . .

#RUN ls -a

RUN yarn run build
RUN rm -rf /app/src

ENV MONGODB_URL mongodb://root:admin92@databases_mongodb_1:27017/db-node?authSource=admin
ENV PORT 5000

EXPOSE 5000
CMD [ "yarn", "run", "start" ]