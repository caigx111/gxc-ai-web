// 站点主脚本 - gxc.ai 个人主页
// 包含所有交互功能和动画效果

// ===== 全局工具函数 =====

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 导航栏功能 =====

// 导航栏滚动效果
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 向下滚动
        header.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动
        header.style.transform = 'translateY(0)';
    }
    
    // 背景模糊效果
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(0px)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// 移动端菜单切换
function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.setAttribute('aria-label', '切换菜单');
    
    nav.appendChild(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // 点击菜单项后关闭菜单
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '☰';
        }
    });
    
    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '☰';
        }
    });
}

// ===== 滚动动画 =====

// 创建观察器用于滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.tech-card, .book-card, .essay-card, .current-item, .photo-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ===== 书籍分类筛选 =====

// 全局变量存储当前筛选
let currentBookFilter = 'all';

function filterBooks(category) {
    currentBookFilter = category;
    const bookCards = document.querySelectorAll('.book-card');
    const categoryButtons = document.querySelectorAll('.reading-categories .category');
    
    // 更新按钮状态
    categoryButtons.forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = 'var(--text-primary)';
    });
    
    event.target.closest('.category').style.background = 'var(--primary-color)';
    event.target.closest('.category').style.color = 'white';
    
    // 筛选书籍
    bookCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // 如果没有书籍显示，显示提示
    const visibleBooks = Array.from(bookCards).filter(card => 
        card.style.display !== 'none'
    );
    
    if (visibleBooks.length === 0) {
        showNoBooksMessage(category);
    }
}

function showNoBooksMessage(category) {
    const booksGrid = document.getElementById('booksGrid');
    let message = document.getElementById('noBooksMessage');
    
    if (!message) {
        message = document.createElement('div');
        message.id = 'noBooksMessage';
        message.style.cssText = `
            text-align: center;
            padding: 3rem;
            background: white;
            border-radius: 15px;
            box-shadow: var(--shadow-light);
            grid-column: 1 / -1;
        `;
        booksGrid.appendChild(message);
    }
    
    const categoryNames = {
        'math': '数学',
        'philosophy': '哲学', 
        'history': '历史',
        'literature': '文学',
        'economics': '经济'
    };
    
    message.innerHTML = `
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
            暂无${categoryNames[category] || category}类书籍
        </h3>
        <p style="color: var(--text-secondary);">
            该分类的读书笔记正在整理中，敬请期待...
        </p>
    `;
}

// ===== 摄影分类筛选 =====

function filterPhotos(category) {
    const photoItems = document.querySelectorAll('.photo-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 更新按钮状态
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // 筛选照片
    photoItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== 进度条动画 =====

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1s ease-out';
        }, 100);
    });
}

// ===== 阅读进度追踪 =====

function trackReadingProgress() {
    const readingSection = document.getElementById('reading');
    if (!readingSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 可以在这里添加阅读进度追踪逻辑
                console.log('用户正在浏览读书部分');
                // 可以发送分析数据到后端
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(readingSection);
}

// ===== 音乐播放功能（模拟） =====

function createMusicPlayer() {
    const musicItems = document.querySelectorAll('.music-item');
    
    musicItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除其他项的播放状态
            musicItems.forEach(otherItem => {
                otherItem.classList.remove('playing');
            });
            
            // 切换当前项的播放状态
            this.classList.toggle('playing');
            
            if (this.classList.contains('playing')) {
                // 添加播放状态样式
                this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                this.style.color = 'white';
                
                // 模拟播放信息
                const musicInfo = this.querySelector('.music-info');
                const playStatus = document.createElement('div');
                playStatus.className = 'play-status';
                playStatus.innerHTML = '▶ 正在播放...';
                playStatus.style.cssText = `
                    font-size: 0.8rem;
                    color: var(--accent-color);
                    margin-top: 0.5rem;
                `;
                musicInfo.appendChild(playStatus);
                
                // 3秒后移除播放状态
                setTimeout(() => {
                    playStatus.remove();
                    this.classList.remove('playing');
                    this.style.background = '';
                    this.style.color = '';
                }, 3000);
            } else {
                this.style.background = '';
                this.style.color = '';
            }
        });
    });
}

// ===== 图片懒加载 =====

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== 搜索功能 =====

function createSearchFunction() {
    // 创建搜索框
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        background: white;
        padding: 0.5rem;
        border-radius: 25px;
        box-shadow: var(--shadow-medium);
        display: none;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索文章...';
    searchInput.style.cssText = `
        border: none;
        outline: none;
        padding: 0.5rem;
        width: 200px;
        font-size: 0.9rem;
    `;
    
    searchContainer.appendChild(searchInput);
    document.body.appendChild(searchContainer);
    
    // 快捷键触发搜索
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            searchContainer.style.display = searchContainer.style.display === 'none' ? 'block' : 'none';
            if (searchContainer.style.display === 'block') {
                searchInput.focus();
            }
        }
        
        if (e.key === 'Escape') {
            searchContainer.style.display = 'none';
            searchInput.value = '';
        }
    });
    
    // 搜索逻辑
    searchInput.addEventListener('input', debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const searchableElements = document.querySelectorAll('.book-card, .essay-card, .tech-card');
        
        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm) && searchTerm.length > 2) {
                element.style.border = '2px solid var(--accent-color)';
                element.style.animation = 'pulse 1s infinite';
            } else {
                element.style.border = '';
                element.style.animation = '';
            }
        });
    }, 300));
}

// ===== 键盘导航 =====

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // 空格键滚动到下一部分
        if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            const currentSection = getCurrentSection();
            const nextSection = currentSection ? currentSection.nextElementSibling : null;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // 上下箭头键导航
        if (e.key === 'ArrowDown' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            window.scrollBy({ top: 100, behavior: 'smooth' });
        }
        
        if (e.key === 'ArrowUp' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            window.scrollBy({ top: -100, behavior: 'smooth' });
        }
    });
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 200;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            return section;
        }
    }
    return null;
}

// ===== 暗黑模式切换 =====

function createDarkModeToggle() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow-medium);
        z-index: 1001;
        transition: var(--transition);
    `;
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        
        // 保存用户偏好
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    document.body.appendChild(darkModeToggle);
    
    // 恢复用户偏好
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
}

// ===== 性能监控 =====

function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            if (loadTime > 3000) {
                console.warn(`页面加载时间较长: ${loadTime}ms`);
                // 可以在这里添加性能优化建议
            }
        });
    }
}

// ===== 统计分析 =====

function trackUserInteraction() {
    // 简单的用户交互追踪
    const interactions = {
        scrollDepth: 0,
        clickCount: 0,
        timeSpent: 0
    };
    
    // 追踪滚动深度
    window.addEventListener('scroll', debounce(function() {
        const scrollPercent = Math.round((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        interactions.scrollDepth = Math.max(interactions.scrollDepth, scrollPercent);
    }, 100));
    
    // 追踪点击
    document.addEventListener('click', function() {
        interactions.clickCount++;
    });
    
    // 追踪停留时间
    const startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        interactions.timeSpent = Math.round((Date.now() - startTime) / 1000);
        console.log('用户交互数据:', interactions);
    });
}

// ===== 初始化所有功能 =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 gxc.ai 个人主页初始化完成');
    console.log('💡 快捷键提示:');
    console.log('  - "/" : 打开搜索');
    console.log('  - "空格" : 滚动到下一部分');
    console.log('  - "↑/↓" : 上下滚动');
    console.log('  - "ESC" : 关闭搜索');
    
    // 创建移动端菜单
    createMobileMenu();
    
    // 创建音乐播放器
    createMusicPlayer();
    
    // 设置键盘导航
    setupKeyboardNavigation();
    
    // 创建搜索功能
    createSearchFunction();
    
    // 创建暗黑模式切换
    createDarkModeToggle();
    
    // 图片懒加载
    lazyLoadImages();
    
    // 阅读进度追踪
    trackReadingProgress();
    
    // 性能监控
    monitorPerformance();
    
    // 用户交互追踪
    trackUserInteraction();
    
    // 启动进度条动画
    setTimeout(animateProgressBars, 1000);
    
    // 添加页面加载完成的样式
    document.body.classList.add('loaded');
    
    // 为所有卡片添加悬停效果
    const cards = document.querySelectorAll('.tech-card, .book-card, .essay-card, .current-item, .photo-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== 错误处理 =====

window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误上报逻辑
});

// ===== 代码片段动画 =====

function animateCodeSnippet() {
    const codeSnippet = document.querySelector('.code-snippet');
    if (codeSnippet) {
        const code = codeSnippet.querySelector('code');
        const originalText = code.textContent;
        code.textContent = '';
        
        // 逐字符显示代码
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                code.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }
}

// 页面加载完成后启动代码动画
window.addEventListener('load', animateCodeSnippet);

// ===== 响应式处理 =====

const handleResize = debounce(function() {
    // 响应式处理逻辑
    const width = window.innerWidth;
    console.log(`窗口大小: ${width}px`);
    
    // 可以根据窗口大小调整布局
    if (width < 768) {
        // 移动端处理
    } else {
        // 桌面端处理
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===== 导出功能 =====

// 导出为 PDF（模拟）
function exportToPDF() {
    console.log('导出 PDF 功能');
    // 实际实现需要借助 jsPDF 或其他库
    alert('PDF 导出功能正在开发中...');
}

// 导出为 Markdown（模拟）
function exportToMarkdown() {
    console.log('导出 Markdown 功能');
    // 实际实现需要将页面内容转换为 Markdown 格式
    alert('Markdown 导出功能正在开发中...');
}

// ===== 定时更新检查 =====

function checkForUpdates() {
    // 检查网站是否有更新
    const currentVersion = '1.0.0';
    console.log(`当前版本: ${currentVersion}`);
    
    // 可以在这里添加版本检查逻辑
    // fetch('/api/version')
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.version !== currentVersion) {
    //       showUpdateNotification(data.version);
    //     }
    //   });
}

// ===== PWA 支持 =====

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
    });
}

// ===== 完成 =====

console.log('%cgxc.ai - 个人主页', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c用数学思考，用代码创造，用心感受，用爱分享', 'color: #764ba2; font-size: 14px;');