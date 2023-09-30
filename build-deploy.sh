#!/bin/bash

# 定义相关参数
IMAGE_NAME="sophonifyhome"
CONTAINER_NAME="sophonifycontainer"

# 从 Github pull 代码
echo "正在从 Github 拉取代码..."
git pull origin main

# 检查上一条命令是否执行成功
if [ $? -ne 0 ]; then
    echo "从 Github 拉取代码失败!"
    exit 1
fi

# Docker build image
echo "正在构建 Docker 镜像..."
docker build -t $IMAGE_NAME .

# 检查上一条命令是否执行成功
if [ $? -ne 0 ]; then
    echo "Docker 镜像构建失败!"
    exit 1
fi

# Docker run new image
echo "正在启动 Docker 容器..."
docker run -d -p 80:3000 --name $CONTAINER_NAME $IMAGE_NAME

# 检查上一条命令是否执行成功
if [ $? -ne 0 ]; then
    echo "Docker 容器启动失败!"
    exit 1
fi

echo "所有操作均已成功完成!"