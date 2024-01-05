FROM node:14.17.0
WORKDIR /app/node
COPY ./source .
RUN pwd && ls
RUN npm install
RUN cd plugins/wysiwyg && npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
ENV NODE_ENV=production
RUN npm run build
CMD [ "yarn", "production" ]