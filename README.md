# gxc.ai - 个人主页

一个简洁优雅的个人网站，用于分享读书心得和旅行笔记。

## 🚀 项目特点

- **响应式设计** - 适配桌面和移动设备
- **现代简洁** - 清晰的布局和优雅的视觉效果
- **内容导向** - 专注于内容展示和阅读体验
- **易于维护** - 简单的HTML/CSS/JS结构，便于扩展

## 📁 项目结构

```
gxc-ai-website/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 项目说明
```

## 🎯 网站内容

### 主要版块
1. **首页** - 个人介绍和导航
2. **关于我** - 个人简介和背景
3. **读书心得** - 书籍评论和阅读感悟
4. **旅行笔记** - 旅行经历和见闻分享
5. **联系方式** - 联系信息和社交媒体

### 设计风格
- **配色方案**: 蓝紫色渐变主题，简洁现代
- **字体**: 使用Noto Sans SC，适合中文阅读
- **布局**: 网格布局，内容清晰分层
- **交互**: 平滑滚动、悬停效果、响应式菜单

## 🛠️ 自定义指南

### 添加新的读书心得
1. 在 `index.html` 中找到 `.books-grid` 部分
2. 复制一个 `.book-card` 结构
3. 替换书籍信息：
   ```html
   <div class="book-card">
       <div class="book-cover">
           <img src="书籍封面图片URL" alt="书籍封面">
       </div>
       <div class="book-info">
           <h3>书名</h3>
           <p class="book-author">作者</p>
           <p class="book-summary">书籍简介或读后感</p>
           <a href="#" class="read-more">阅读更多</a>
       </div>
   </div>
   ```

### 添加新的旅行笔记
1. 在 `index.html` 中找到 `.travels-grid` 部分
2. 复制一个 `.travel-card` 结构
3. 替换旅行信息：
   ```html
   <div class="travel-card">
       <div class="travel-image">
           <img src="旅行照片URL" alt="旅行照片">
       </div>
       <div class="travel-info">
           <h3>旅行地点</h3>
           <p class="travel-date">旅行日期</p>
           <p class="travel-summary">旅行简介或感受</p>
           <a href="#" class="read-more">阅读更多</a>
       </div>
   </div>
   ```

### 更新个人信息
1. 在 `index.html` 中找到 `.about-text` 部分
2. 修改个人介绍文本
3. 更新联系方式（页脚部分）

## 🚀 部署说明

### 静态部署
这个网站是纯静态的，可以部署到任何支持静态文件的托管平台：

1. **GitHub Pages** (推荐)
   - 上传到GitHub仓库
   - 在仓库设置中启用GitHub Pages
   - 选择主分支作为发布源

2. **Netlify**
   - 拖拽项目文件夹到Netlify
   - 自动生成随机域名
   - 可绑定自定义域名 `gxc.ai`

3. **Vercel**
   - 导入项目到Vercel
   - 自动部署为静态网站

### 域名配置
1. 购买域名 `gxc.ai`
2. 在DNS设置中添加A记录或CNAME记录
3. 在托管平台中配置自定义域名

## 📱 移动端优化

网站已针对移动设备优化：
- 响应式导航菜单
- 自适应网格布局
- 触摸友好的交互元素
- 优化的字体大小和间距

## 🔧 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式和动画
- **JavaScript** - 交互功能
- **响应式设计** - 移动优先
- **Web字体** - Google Fonts (Noto Sans SC)

## 📝 开发说明

### 添加新功能
1. 保持代码结构清晰
2. 遵循现有的命名规范
3. 确保移动端兼容性
4. 测试不同浏览器

### 性能优化
- 图片压缩和懒加载
- CSS和JS文件压缩
- 浏览器缓存策略
- CDN加速

## 🤝 贡献

欢迎提出改进建议和问题反馈！

---

**创建时间**: 2026年3月14日  
**作者**: Claude & gxc.ai  
**版本**: 1.0.0