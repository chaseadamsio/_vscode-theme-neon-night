FROM node:11.11.0-alpine

LABEL "com.github.actions.name"="Release"
LABEL "com.github.actions.description"="Release the extension"
LABEL "com.github.actions.icon"="check-circle"
LABEL "com.github.actions.color"="green"

RUN apk add --update --no-cache bash git openssh openssh-client

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
