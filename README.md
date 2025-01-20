# Project Overview
## General information
**"Can you trust or eyes?"** was created to raise attention to the dangers that AI Generated 
content create all over the Internet but especially in Social Media. As it was created with young high-school students in mind
it focuses on differenting the real and generated content in context of the apps such as Instagram.

## Goals and Gameplay
The goal of the participants is to differentiate between real and AI generated photos with rising difficulty level. After every attempt
they are presented with the most important features that could lead them to noticing signs of artificial generation.

After the quiz participants are presented with real stories of frauds committed with use of generated content.

At the end the activity is summarised in form of a short checklist of the most important things to look for 
when trying to make sure if the photo they see is real or fake. It is also available as a downloadable PDF file.

# How to use the application?
To run the project locally first build the Docker image using the following command:

```console
docker build -t can_you_trust_you_eyes:latest .
```

Next, run the image using the following command:


```console
docker run -it --rm -p 8080:80 can_you_trust_you_eyes:latest
```

The app is now served at localhost:8080
