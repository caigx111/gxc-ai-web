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

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// 滚动时的淡入动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.book-card, .travel-card, .about-content');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// 移动端菜单切换
function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // 创建菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰';
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    `;
    
    // 在移动端显示菜单按钮
    function checkMobile() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    }
    
    // 切换菜单显示
    menuButton.addEventListener('click', function() {
        if (navLinks.style.display === 'none') {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#fff';
            navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navLinks.style.padding = '1rem';
        } else {
            navLinks.style.display = 'none';
        }
    });
    
    nav.insertBefore(menuButton, navLinks);
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    checkMobile();
}

// 初始化移动端菜单
createMobileMenu();

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加加载动画类
    document.body.classList.add('loaded');
    
    // 为所有卡片添加悬停效果
    const cards = document.querySelectorAll('.book-card, .travel-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 简单的页面访问统计
if (typeof localStorage !== 'undefined') {
    let visitCount = localStorage.getItem('gxc-ai-visits') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('gxc-ai-visits', visitCount);
    
    console.log(`欢迎第 ${visitCount} 次访问 gxc.ai!`);
}

// 添加一些互动提示
console.log('👋 欢迎来到 gxc.ai！');
console.log('💡 这是一个个人网站，用于分享读书心得和旅行笔记');
console.log('🚀 网站正在开发中...');