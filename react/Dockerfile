FROM node:16.14.2

WORKDIR /var/www/app/react

ADD package.json .

RUN yarn install

ADD . .

EXPOSE 4173

CMD yarn run build && yarn run preview