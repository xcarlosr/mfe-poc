FROM nginx:latest

COPY ../dist/apps/login /usr/share/nginx/html

COPY /apps/login/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
