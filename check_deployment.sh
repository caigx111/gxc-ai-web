#!/bin/bash

# GitHub Pages 部署状态检查脚本

echo "🔍 检查 cgx.world 部署状态..."
echo "================================"

# 获取当前时间
CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")
echo "检查时间: $CURRENT_TIME"
echo ""

# 检查网站是否可访问
if curl -s --head https://cgx.world > /dev/null; then
    echo "✅ 网站可以访问"
    
    # 获取最后修改时间（如果有 Last-Header）
    LAST_MODIFIED=$(curl -s -I https://cgx.world | grep -i "Last-Modified:" | cut -d' ' -f2-)
    if [ ! -z "$LAST_MODIFIED" ]; then
        echo "📅 最后修改: $LAST_MODIFIED"
    fi
    
    # 获取服务器信息
    SERVER=$(curl -s -I https://cgx.world | grep -i "Server:" | cut -d' ' -f2)
    echo "🖥️  服务器: $SERVER"
    
else
    echo "❌ 网站无法访问"
fi

echo ""
echo "💡 提示:"
echo "- GitHub Pages 更新通常需要 5-30 分钟"
echo "- 如需立即查看，清除浏览器缓存或使用无痕模式"
echo "- 修改代码后，可在本地运行 ./start_local_server.sh 预览"