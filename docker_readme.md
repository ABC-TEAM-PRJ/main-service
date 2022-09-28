## FROM node:14.19.0 : nodejs 14.19.0 버전의 이미지를 받아서 docker image를 생성합니다.
FROM node:14.19.0 

## RUN mkdir -p /app : app 폴더를 생성합니다.

RUN mkdir -p /app

## ADD . /app/ : 현재 폴더의 모든것을 생성된 app 폴더에 복사합니다.

WORKDIR /app
ADD . /app/

## RUN rm ... || true : 파일 삭제. 뒤의 "|| true" 는 파일이 없을 경우 오류로 인해 실행이 중단되지 않게 하기 위해 추가합니다.

RUN rm yarn.lock || true
RUN rm package-lock.json || true

## RUN yarn build : 프로젝트를 빌드합니다.

RUN yarn
RUN yarn build

## ENV HOST 0.0.0.0 : 모든 IP를 개방합니다.

ENV HOST 0.0.0.0

## EXPOSE 3000 : 3000번 포트를 개방합니다.

EXPOSE 3000

## CMD ["yarn", "start"] : yarn start 명령을 실행합니다.

CMD [ "yarn", "start"]

## 도커파일 빌드 main-service-docker / 버전 0.0.1 / . 현재폴더의 모든파일을

docker build --tag main-service-docker:0.0.1 .

## Docker 이미지 실행 (3000 -> 3000 port로 연결)

docker run --name main-service -d -p 3000:3000 main-service-docker:0.0.1








