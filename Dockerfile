#FROM nginx:alpine
#COPY /dist/exos-angular /usr/share/nginx/html
#EXPOSE 80

# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/exos-angular /usr/share/nginx/html
EXPOSE 80