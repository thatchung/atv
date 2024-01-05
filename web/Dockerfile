#FROM node:14.18.1
FROM node:16.13.0
WORKDIR /app/node
COPY ./source .
RUN pwd && ls
RUN echo "====== BUILD APPS ======"
RUN yarn install --ignore-engines
RUN npm install pm2 -g
RUN yarn build
ENV NODE_ENV=production
ENV NUXT_ENV_STAGE=production
CMD [ "yarn", "start:production" ]