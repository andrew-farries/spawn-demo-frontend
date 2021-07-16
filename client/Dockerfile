FROM node:10.13 AS build
ARG REACT_APP_BACKEND_ENDPOINT
ENV REACT_APP_BACKEND_ENDPOINT=$REACT_APP_BACKEND_ENDPOINT
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.13.10-alpine
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY --from=build /app/build /www/data
COPY ./nginx.conf /etc/nginx/conf.d/default.conf