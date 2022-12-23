FROM nginx:latest

WORKDIR /app/server

COPY ./dist/apps/dashboard /usr/share/nginx/html

COPY ./apps/dashboard/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
