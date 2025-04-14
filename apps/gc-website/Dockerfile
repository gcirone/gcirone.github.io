FROM docker.io/nginx:stable-alpine
COPY dist/apps/gcirone-ui/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
