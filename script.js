

// 表单处理
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const inputs = this.querySelectorAll('input, textarea, select');
        const formData = {};
        let isValid = true;
        
        // 验证并收集表单数据
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#FF6B35';
                
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 3000);
            } else {
                // 使用 data-i18n-placeholder 属性来稳定地识别字段
                const i18nKey = input.getAttribute('data-i18n-placeholder');
                switch (i18nKey) {
                    case 'contact.form.name':
                        formData.name = input.value.trim();
                        break;
                    case 'contact.form.email':
                        formData.email = input.value.trim();
                        break;
                    case 'contact.form.company':
                        formData.company = input.value.trim();
                        break;
                    case 'contact.form.message':
                        formData.message = input.value.trim();
                        break;
                }

                if (input.tagName === 'SELECT') {
                    formData.companyType = input.options[input.selectedIndex].text;
                }
            }
        });
        
        if (!isValid) {
            showNotification('请填写所有必填字段', 'error');
            return;
        }
        
        // 发送数据到Google Apps Script
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('span').textContent;
        
        submitBtn.querySelector('span').textContent = '发送中...';
        submitBtn.disabled = true;
        
        try {
            console.log('发送数据:', formData);
          
            await fetch('https://script.google.com/macros/s/AKfycbxfuQv0Hqr5nPjnBz5qHy32mz-aiq1iaxsDMdpgFU82Q1pUaezszZ5AirxJ1q1KhX4a7g/exec', {
                method: 'POST',
               
                headers: {
                  'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData)
            });
            
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
            showNotification('您的消息已发送！我们会尽快与您联系。', 'success');
            this.reset();

        } catch (error) {
            console.error('发送失败:', error);
            
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
            showNotification('发送失败，请检查您的网络连接并重试。', 'error');
        }
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