FROM node:16.13.0
WORKDIR /app/node
COPY ./source .
RUN pwd && ls
RUN yarn
ENV NODE_ENV=production
RUN yarn build
CMD [ "yarn", "release:production" ]