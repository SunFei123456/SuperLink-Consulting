// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // 移动端关闭菜单
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// 导航栏当前位置高亮
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// 导航栏滚动效果
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
    //  暂定
    } else {
    //   暂定
    }
    
    // 更新当前导航项
    updateActiveNavItem();
    
    lastScrollTop = scrollTop;
});

// 移动端菜单切换
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

console.log('navToggle:', navToggle);
console.log('navMenu:', navMenu);

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('点击了汉堡菜单');
        
        // 切换菜单状态
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        console.log('navToggle.classList:', navToggle.classList.toString());
        console.log('navMenu.classList:', navMenu.classList.toString());
        
        // 手动设置汉堡菜单动画
        const spans = navToggle.querySelectorAll('span');
        if (navToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[1].style.transform = 'scale(0)';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[1].style.transform = '';
            spans[2].style.transform = '';
        }
    });
    
    // 点击菜单项关闭菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // 重置汉堡菜单样式
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[1].style.transform = '';
                spans[2].style.transform = '';
            }
        });
    });
    
    // 点击外部关闭菜单
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // 重置汉堡菜单样式
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[1].style.transform = '';
                spans[2].style.transform = '';
            }
        }
    });
}

// 语言切换功能
const langOptions = document.querySelectorAll('.lang-option');
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // 这里可以添加语言切换逻辑
        console.log(`切换语言为: ${option.textContent}`);
    });
});



// 交叉观察器用于触发动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            
            // 数字动画
            if (target.classList.contains('stat-number')) {
                const text = target.textContent;
                let finalNumber;
                
                if (text.includes('%')) {
                    finalNumber = parseInt(text);
                } else if (text.includes('h')) {
                    finalNumber = parseInt(text);
                } else if (text.includes('+')) {
                    finalNumber = parseInt(text);
                } else {
                    finalNumber = parseInt(text);
                }
                
                observer.unobserve(target);
            }
            
            // 卡片动画
            if (target.classList.contains('feature-card') ||
                target.classList.contains('team-member')) {
                target.style.transform = 'translateY(0)';
                target.style.opacity = '1';
                observer.unobserve(target);
            }
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.stat-number, .feature-card, .team-member').forEach(el => {
    if (el.classList.contains('feature-card') ||
        el.classList.contains('team-member')) {
        el.style.transform = 'translateY(50px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.8s ease';
    }
    observer.observe(el);
});

// 作品集筛选功能
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 添加active类到点击的按钮
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.transform = 'scale(0.8)';
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// 作品集项目点击事件
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.overlay-content h4').textContent;
        const description = this.querySelector('.overlay-content p').textContent;
        
        // 这里可以打开模态框或跳转到详细页面
        console.log(`查看项目: ${title} - ${description}`);
        
        // 模拟项目详情查看
        const modal = createProjectModal(title, description);
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});



// 表单处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        // 简单验证
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#FF6B35';
                
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 3000);
            }
        });
        
        if (!isValid) {
            showNotification('请填写所有必填字段', 'error');
            return;
        }
        
        // 模拟发送
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('span').textContent;
        
        submitBtn.querySelector('span').textContent = '发送中...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
            showNotification('消息发送成功！我们会尽快回复您。', 'success');
            this.reset();
        }, 2000);
    });
}

// 通知函数
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 2rem;
            right: 2rem;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        .notification.success {
            background: linear-gradient(135deg, #4CAF50, #45a049);
        }
        .notification.error {
            background: linear-gradient(135deg, #f44336, #da190b);
        }
        .notification.show {
            transform: translateX(0);
        }
    `;
    
    notification.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 页面加载完成后的动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // 英雄区域动画
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// 视差滚动效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // 背景光束视差
    document.querySelectorAll('.light-beam').forEach((beam, index) => {
        const speed = 0.2 + (index * 0.1);
        beam.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // 粒子视差
    document.querySelectorAll('.particle').forEach((particle, index) => {
        const speed = 0.1 + (index * 0.05);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 按钮悬停效果增强
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        const glow = this.querySelector('.btn-glow');
        if (glow) {
            glow.style.opacity = '1';
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        const glow = this.querySelector('.btn-glow');
        if (glow) {
            glow.style.opacity = '0';
        }
    });
});