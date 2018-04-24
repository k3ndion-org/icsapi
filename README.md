#npm
npm install
npm run start



#Docker
#Build image that configured by 'Dockerfile' file
docker build -t ica-server .
#Run image
docker run --rm -d -p 4000:4000 ica-server:latest
