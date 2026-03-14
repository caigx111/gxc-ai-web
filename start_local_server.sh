#!/bin/bash

# 本地服务器启动脚本
echo "🚀 启动本地服务器..."
echo "访问地址: http://localhost:8000"
echo "按 Ctrl+C 停止服务器"

# 进入项目目录
cd "$(dirname "$0")"

# 启动 Python HTTP 服务器
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ 未找到 Python，请安装 Python 3"
    exit 1
fi