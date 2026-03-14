# 📝 cgx.world 网站更新指南

本指南说明如何更新你的个人网站 cgx.world。

## 🔄 更新流程概览

### 自动部署机制
```
修改本地代码 → 推送到 GitHub → 自动构建部署 → 网站更新
```

### 更新时间线
- **代码提交**: 即时
- **GitHub 检测**: 1-5分钟
- **构建部署**: 5-30分钟
- **完全更新**: 最多30分钟

## 🚀 快速更新步骤

### 步骤1：修改本地文件
在你的项目目录中修改文件：
```bash
cd /Users/caiguanxiong/claw_workspace/gxc-ai-website
```

### 步骤2：预览本地更改（可选）
```bash
./start_local_server.sh
```
然后在浏览器访问 `http://localhost:8000`

### 步骤3：提交更改到 GitHub
```bash
git add .
git commit -m "更新描述: 添加新的读书心得"
git push origin main
```

### 步骤4：等待自动部署
- GitHub 会自动检测并部署
- 5-30分钟后访问 `https://cgx.world` 查看更新

## 🛠️ 常用更新操作

### 1. 添加新的读书心得

#### 创建新的读书页面
```bash
# 复制模板
cp books/sample-book.html books/你的书名.html

# 编辑新文件
open books/你的书名.html
```

#### 更新首页显示
编辑 `index.html`，在读书心得部分添加新书：

```html
<div class="book-card">
    <div class="book-cover">
        <img src="书籍封面URL" alt="书籍封面">
    </div>
    <div class="book-info">
        <h3>书名</h3>
        <p class="book-author">作者</p>
        <p class="book-summary">简要介绍...</p>
        <a href="books/你的书名.html" class="read-more">阅读更多</a>
    </div>
</div>
```

### 2. 添加新的旅行笔记

#### 创建新的旅行页面
```bash
# 复制模板
cp travels/sample-travel.html travels/旅行地点.html

# 编辑新文件
open travels/旅行地点.html
```

#### 更新首页显示
编辑 `index.html`，在旅行笔记部分添加新游记：

```html
<div class="travel-card">
    <div class="travel-image">
        <img src="旅行照片URL" alt="旅行照片">
    </div>
    <div class="travel-info">
        <h3>旅行标题</h3>
        <p class="travel-date">旅行日期</p>
        <p class="travel-summary">简要介绍...</p>
        <a href="travels/旅行地点.html" class="read-more">阅读更多</a>
    </div>
</div>
```

### 3. 更新个人信息

编辑 `index.html` 中的关于我部分：

```html
<section id="about" class="about">
    <div class="container">
        <h2>关于我</h2>
        <div class="about-content">
            <div class="about-text">
                <p>你的个人介绍...</p>
                <p>更多关于你的信息...</p>
            </div>
        </div>
    </div>
</section>
```

## 📊 监控更新状态

### 方法1：GitHub Actions
1. 访问 GitHub 仓库
2. 点击 "Actions" 标签
3. 查看 "pages-build-deployment" 工作流

### 方法2：Pages 设置
1. 访问 GitHub 仓库
2. 点击 "Settings" → "Pages"
3. 查看部署状态

### 方法3：使用检查脚本
```bash
./check_deployment.sh
```

## 🔧 故障排除

### 问题1：更新后网站没有变化

#### 可能原因：
1. **浏览器缓存**：浏览器显示旧版本
2. **CDN缓存**：GitHub Pages CDN 未更新
3. **部署失败**：GitHub 构建失败

#### 解决方法：

##### 清除浏览器缓存
- **快捷键**: `Ctrl+Shift+R` (Windows) 或 `Cmd+Shift+R` (Mac)
- **开发者工具**: F12 → 右键刷新 → "清空缓存并硬性重新加载"
- **无痕模式**: 使用浏览器无痕/隐私模式访问

##### 检查部署状态
```bash
# 检查网站是否可访问
curl -I https://cgx.world

# 获取详细状态
./check_deployment.sh
```

##### 强制重新部署
1. 在 GitHub 仓库中创建一个空提交：
   ```bash
   git commit --allow-empty -m "触发重新部署"
   git push origin main
   ```

### 问题2：部署失败

#### 检查构建错误
1. 访问 GitHub 仓库的 "Actions"
2. 查看失败的构建日志
3. 根据错误信息修复问题

#### 常见错误：
- **文件路径错误**: 检查文件名大小写
- **HTML 语法错误**: 验证 HTML 代码
- **文件缺失**: 确保所有引用文件存在

### 问题3：图片无法显示

#### 检查：
1. **图片路径**: 确保路径正确
2. **文件名**: 避免中文和特殊字符
3. **文件大小**: 大图片会影响加载速度

#### 优化建议：
```bash
# 压缩图片（如果需要）
# 可以使用在线工具或本地软件压缩图片
```

## 🚀 最佳实践

### 1. 开发工作流

```bash
# 1. 拉取最新代码（如果有）
git pull origin main

# 2. 本地预览
./start_local_server.sh

# 3. 修改文件
# 在浏览器中访问 http://localhost:8000 预览

# 4. 提交更改
git add .
git commit -m "描述你的更改"
git push origin main

# 5. 检查部署
./check_deployment.sh
```

### 2. 批量更新
为了减少部署等待时间，建议：
- 集中进行多个修改
- 一次性提交所有更改
- 避免频繁的小更新

### 3. 版本控制
使用有意义的提交信息：
```bash
git commit -m "feat: 添加《人类简史》读书心得"
git commit -m "fix: 修复旅行页面图片链接"
git commit -m "docs: 更新联系方式"
```

### 4. 备份重要
定期备份你的网站文件：
```bash
# 备份整个项目
cp -r /Users/caiguanxiong/claw_workspace/gxc-ai-website /Users/caiguanxiong/backup/gxc-ai-website-$(date +%Y%m%d)
```

## 📞 需要帮助？

如果在更新过程中遇到问题：

1. **检查日志**: 查看 GitHub Actions 的构建日志
2. **搜索解决方案**: 在网上搜索错误信息
3. **联系支持**: 
   - GitHub Pages 官方文档
   - 技术社区 (Stack Overflow)
   - 或直接联系我寻求帮助

---

**记住**: 更新网站需要耐心，等待 5-30 分钟是正常的。良好的开发习惯可以减少错误和等待时间！