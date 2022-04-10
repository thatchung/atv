FROM node:14.17.0
WORKDIR /app/node
COPY ./source .
RUN pwd && ls
RUN echo "====== BUILD APPS ======"
RUN yarn
RUN yarn build
RUN yarn build_production
CMD [ "yarn", "start:production" ]