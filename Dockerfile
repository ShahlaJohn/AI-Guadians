FROM node:lts as builder

# Copy Vue.js code
WORKDIR /app
COPY . .

### Build Vue.js into plain HTML/CSS/JS
RUN npm run build-prod

### Create final container
FROM nginx:stable

### Copy the app from the biolder image
COPY --from=builder /app/dist /usr/share/nginx/html
