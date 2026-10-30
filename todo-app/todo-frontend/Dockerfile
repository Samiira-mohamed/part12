FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=https://dark-phantasm-p7gj44px7vxc654p-3000.app.github.dev

RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html