# Use Nginx to serve static files
FROM nginx:alpine

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output from Jenkins workspace into Nginx folder
COPY build/ /usr/share/nginx/html

# Expose the default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
