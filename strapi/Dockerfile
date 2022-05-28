FROM node:14.17.0
WORKDIR /app/node
COPY ./source .
RUN pwd && ls
RUN yarn
RUN cd plugins/wysiwyg && yarn add @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
ENV NODE_ENV=production
RUN yarn build
CMD [ "yarn", "production" ]