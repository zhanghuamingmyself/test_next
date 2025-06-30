# node 构建
FROM node:20.14.0-alpine3.20 as build-stage
# 署名
LABEL maintainer="Adoin <zhanghuamingmysql@163.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

# 复制项目文件
COPY . .

RUN npm run build

RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"
# node部分结束

# Production image, copy all the files and run next
FROM node:20.14.0-alpine3.20 as production-stage

WORKDIR /app

# 仅复制必要的文件
COPY --from=build-stage /app/package*.json ./
# 使用 COPY 替代 ADD
COPY --from=build-stage /app/next.config.ts ./
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/.env* ./
COPY --from=build-stage /app/.next ./.next

# 仅安装生产依赖
RUN npm install --production

# 暴露端口
EXPOSE 3000
CMD ["npm","run","start"]
