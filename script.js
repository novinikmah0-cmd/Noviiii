document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg)';
                }, index * 150);
            }
        });
    });

    document.querySelectorAll('.item, .package').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Button click effect
    document.querySelectorAll('.btn, .whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                window.open(this.href, '_blank');
            }, 150);
        });
    });

    // Gallery hover effect
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) rotate(2deg) scale(1.03)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });
});
