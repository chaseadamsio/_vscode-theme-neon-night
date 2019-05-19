FROM node:11.11.0-alpine

LABEL "com.github.actions.name"="Release"
LABEL "com.github.actions.description"="Publish Theme to Visual Studio Marketplace"
LABEL "com.github.actions.icon"="check-circle"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
