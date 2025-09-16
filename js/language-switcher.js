// 语言切换主逻辑
document.addEventListener('DOMContentLoaded', function () {
    // 语言切换相关元素
    const currentLangBtn = document.querySelector('.current-lang');
    
    // 从 localStorage 获取保存的语言设置，默认为中文
    const savedLang = localStorage.getItem('selectedLanguage') || 'zh';
    setLanguage(savedLang);
    updateButtonDisplay(savedLang);

    // 直接点击切换语言
    if (currentLangBtn) {
        currentLangBtn.addEventListener('click', function () {
            const currentLang = this.getAttribute('data-current-lang') || 'zh';
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            
            // 切换语言
            setLanguage(newLang);
            updateButtonDisplay(newLang);
            
            // 更新按钮的当前语言标识
            this.setAttribute('data-current-lang', newLang);
            
            // 保存语言选择
            localStorage.setItem('selectedLanguage', newLang);
        });
    }

    // 其他现有的JavaScript功能（如果有的话）
    initOtherFeatures();
});

// 更新按钮显示
function updateButtonDisplay(lang) {
    const currentLangBtn = document.querySelector('.current-lang');
    if (currentLangBtn) {
        const img = currentLangBtn.querySelector('img');
        if (lang === 'zh') {
            img.src = './images/cn.png';
            img.alt = 'Chinese';
        } else {
            img.src = './images/us.png';
            img.alt = 'English';
        }
        currentLangBtn.setAttribute('data-current-lang', lang);
    }
}

// 设置语言函数
function setLanguage(lang) {
    // 如果翻译文件不存在，直接返回
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded');
        return;
    }

    // 更新导航链接文本
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        let key = '';
        
        if (href === '#home') key = 'home';
        else if (href === '#about') key = 'about';
        else if (href === '#target-clients') key = 'target-clients';
        else if (href === '#services') key = 'services';
        else if (href === '#guide') key = 'guide';
        else if (href === 'practical-guide.html') key = 'practicalGuide';
        else if (href === '#team') key = 'team';
        else if (href === '#advantages') key = 'advantages';
        else if (href === '#contact') key = 'contact';

        if (key && translations[lang].nav[key]) {
            link.textContent = translations[lang].nav[key];
        }
    });

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

        // 逐级查找翻译
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }

        if (translation) {
            // 处理包含 HTML 的文本
            if (translation.includes('<br') || translation.includes('<strong>')) {
                element.innerHTML = translation;
            } else {
                // 特殊处理按钮元素 - 更新内部的span文本
                if (element.tagName === 'BUTTON' && element.querySelector('span')) {
                    element.querySelector('span').textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });

    // 更新表单占位符
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = translations[lang];

        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }

        if (translation) {
            element.placeholder = translation;
        }
    });
}

// 初始化其他功能（保留原有功能）
function initOtherFeatures() {
    // 这里可以添加其他原有的JavaScript功能
    // 比如导航高亮、平滑滚动等
    
    // 导航高亮功能
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let scrollY = window.pageYOffset;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // 在顶部时高亮首页
        if (scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // 绑定滚动事件
    window.addEventListener('scroll', updateActiveNav);
    
    // 初始执行一次
    updateActiveNav();
    
    // 移动端导航菜单功能
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // 点击导航链接时关闭菜单
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}