# 🚀 gxc.ai 网站部署指南

这个指南将帮助你将 gxc.ai 个人网站部署到互联网上，让全世界都能访问你的读书心得和旅行笔记。

## 📋 部署前准备

### 1. 域名准备
- **域名**: `gxc.ai`
- **购买渠道**: 推荐在以下平台购买：
  - 阿里云 (万网)
  - 腾讯云
  - Namecheap
  - GoDaddy

### 2. 选择托管平台
推荐以下静态网站托管平台（免费）：

#### GitHub Pages (推荐)
- ✅ 免费
- ✅ 稳定可靠
- ✅ 支持自定义域名
- ✅ 版本控制
- ❌ 国内访问可能较慢

#### Netlify
- ✅ 免费额度充足
- ✅ 全球CDN加速
- ✅ 自动HTTPS
- ✅ 部署简单
- ✅ 国内有节点

#### Vercel
- ✅ 免费额度充足
- ✅ 性能优秀
- ✅ 支持更多功能
- ✅ 国内访问较快

## 🚀 部署步骤

### 方法一：GitHub Pages 部署

#### 1. 创建 GitHub 仓库
1. 登录 [GitHub](https://github.com)
2. 点击 "New repository"
3. 仓库名称: `gxc-ai-website`
4. 设置为 "Public"
5. 点击 "Create repository"

#### 2. 上传网站文件
**方法A: 网页上传**
1. 在仓库页面点击 "uploading an existing file"
2. 拖拽或选择所有网站文件（包括文件夹）
3. 填写提交信息: "Initial commit"
4. 点击 "Commit changes"

**方法B: Git 上传** (推荐)
```bash
# 1. 安装 Git (如果还没有)
# macOS: brew install git
# Windows: 下载安装 Git for Windows

# 2. 配置 Git
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的邮箱"

# 3. 进入项目目录
cd /Users/caiguanxiong/.openclaw/workspace/gxc-ai-website

# 4. 初始化 Git 仓库
git init

# 5. 添加远程仓库
git remote add origin https://github.com/你的GitHub用户名/gxc-ai-website.git

# 6. 添加所有文件
git add .

# 7. 提交更改
git commit -m "Initial commit"

# 8. 推送到 GitHub
git push -u origin main
```

#### 3. 启用 GitHub Pages
1. 进入 GitHub 仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "Deploy from a branch"
5. 分支选择 "main"
6. 文件夹选择 "/ (root)"
7. 点击 "Save"

#### 4. 配置自定义域名
1. 等待几分钟后，GitHub Pages 会生成一个默认域名：`https://你的用户名.github.io/gxc-ai-website`
2. 在域名提供商的控制台设置 DNS 解析：
   - **类型**: CNAME
   - **主机记录**: @ (或者 gxc.ai)
   - **记录值**: `你的用户名.github.io`
   - **TTL**: 600 (或默认值)
3. 回到 GitHub Pages 设置页面，在 "Custom domain" 中输入 `gxc.ai`
4. 勾选 "Enforce HTTPS"

### 方法二：Netlify 部署

#### 1. 注册 Netlify 账号
1. 访问 [Netlify](https://www.netlify.com)
2. 使用 GitHub 账号登录

#### 2. 拖拽部署
1. 将 `gxc-ai-website` 整个文件夹拖拽到 Netlify 首页的部署区域
2. Netlify 会自动识别并部署你的网站
3. 系统会生成一个随机域名：`random-name.netlify.app`

#### 3. 绑定自定义域名
1. 在 Netlify 控制台中点击 "Site settings"
2. 选择 "Domain management" → "Custom domains"
3. 点击 "Add custom domain"
4. 输入 `gxc.ai`
5. 按照提示在域名提供商处设置 DNS：
   - **类型**: CNAME
   - **主机记录**: www (如果需要 www 子域名)
   - **记录值**: `your-site-name.netlify.app`

### 方法三：Vercel 部署

#### 1. 注册 Vercel 账号
1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录

#### 2. 导入项目
1. 点击 "New Project"
2. 选择你的 GitHub 仓库 `gxc-ai-website`
3. 点击 "Import"

#### 3. 部署配置
1. Framework Preset: 选择 "Other"
2. Build Command: 留空 (静态网站不需要构建)
3. Output Directory: 留空
4. 点击 "Deploy"

#### 4. 绑定域名
1. 部署完成后，点击 "Settings" → "Domains"
2. 添加自定义域名 `gxc.ai`
3. 按照提示配置 DNS

## 🔍 部署后检查

### 1. 测试访问
等待 DNS 生效后（通常需要几分钟到几小时），访问：
- `https://gxc.ai`

### 2. 检查功能
- ✅ 页面正常显示
- ✅ 响应式设计正常（手机端测试）
- ✅ 所有链接都能正常跳转
- ✅ 图片正常显示
- ✅ JavaScript 交互功能正常

### 3. SEO 优化
确保网站能够被搜索引擎正常收录：
- 检查 `robots.txt` 是否正常
- 测试移动端友好度
- 验证网站速度

## 🔄 后续维护

### 添加新内容
1. 在本地修改文件
2. 使用 Git 提交更改：
   ```bash
   git add .
   git commit -m "添加新的读书心得"
   git push origin main
   ```
3. 等待几分钟，网站会自动更新

### 监控网站
- 使用 Google Analytics 监控访问量
- 定期检查网站速度和可用性
- 备份网站文件

### 性能优化
- 压缩图片大小
- 启用浏览器缓存
- 使用 CDN 加速
- 定期更新内容

## 🆘 常见问题

### Q: 域名解析不生效？
A: DNS 解析需要时间，通常需要 5-30 分钟，最长可能需要 48 小时。可以清除本地 DNS 缓存或使用 `nslookup gxc.ai` 检查。

### Q: GitHub Pages 无法访问？
A: 检查：
1. 仓库是否为 Public
2. Pages 设置是否正确
3. 文件路径是否正确
4. 是否有违反 GitHub 政策的内容

### Q: 图片无法显示？
A: 检查：
1. 图片路径是否正确
2. 图片格式是否支持
3. 文件名是否包含特殊字符
4. 图片文件是否已上传

### Q: 移动端显示异常？
A: 使用浏览器开发者工具的移动端模拟器测试，检查 CSS 响应式设计是否正常工作。

## 📞 技术支持

如果在部署过程中遇到问题，可以：
1. 查看托管平台的官方文档
2. 搜索相关技术博客
3. 在技术社区提问（如 Stack Overflow）
4. 联系我寻求帮助：hello@gxc.ai

---

**祝部署顺利！很快你的 gxc.ai 个人网站就能上线了！** 🎉