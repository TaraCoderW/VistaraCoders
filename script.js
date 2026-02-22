// SaveIt Platform - Global JavaScript

/**
 * Navigation Management
 */
const NavigationManager = {
    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.highlightCurrentPage();
    },

    setupNavigation() {
        const navLinks = document.querySelectorAll('a[href]');
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
    },

    handleNavClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href.endsWith('.html') || href === 'index.html') {
            // Normal navigation - let browser handle it
            return;
        }
    },

    setupMobileMenu() {
        const menuButton = document.querySelector('button[aria-label*="menu"], span.material-symbols-outlined:contains("menu")');
        if (menuButton) {
            menuButton.addEventListener('click', this.toggleMobileMenu.bind(this));
        }
    },

    toggleMobileMenu() {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.classList.toggle('hidden');
        }
    },

    highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('a[href*=".html"]');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('text-primary', 'font-bold');
                link.classList.remove('text-slate-400', 'hover:text-white');
            }
        });
    }
};

/**
 * Smooth Scroll Behavior
 */
const SmoothScroll = {
    init() {
        document.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                this.scrollToElement(href);
            }
        });
    },

    scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
};

/**
 * Analytics Helper
 */
const Analytics = {
    trackPageView(pageName) {
        console.log(`Page viewed: ${pageName}`);
        // Add your analytics code here (Google Analytics, etc.)
    },

    trackEvent(eventName, eventData) {
        console.log(`Event tracked: ${eventName}`, eventData);
        // Add your analytics code here
    },

    trackNavigation(from, to) {
        this.trackEvent('navigation', { from, to });
    }
};

/**
 * Theme Management
 */
const ThemeManager = {
    init() {
        this.setupThemeToggle();
        this.applyStoredTheme();
    },

    setupThemeToggle() {
        const themeButton = document.querySelector('[aria-label*="theme"], [title*="theme"]');
        if (themeButton) {
            themeButton.addEventListener('click', this.toggleTheme.bind(this));
        }
    },

    toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        if (isDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    },

    applyStoredTheme() {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);
        
        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};

/**
 * Stats Animation
 */
const StatsAnimator = {
    init() {
        this.setupIntersectionObserver();
    },

    setupIntersectionObserver() {
        const statElements = document.querySelectorAll('[data-stat], .stat-number, h4 .text-primary');
        if (statElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateNumber(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statElements.forEach(el => observer.observe(el));
    },

    animateNumber(element) {
        const text = element.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;

        const finalValue = parseInt(match[1]);
        const increment = Math.ceil(finalValue / 30);
        let current = 0;

        const interval = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                element.textContent = text.replace(/\d+/, finalValue);
                clearInterval(interval);
            } else {
                element.textContent = text.replace(/\d+/, current);
            }
        }, 20);
    }
};

/**
 * Form Validation
 */
const FormValidator = {
    init() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', this.validateForm.bind(this));
        });
    },

    validateForm(e) {
        const form = e.target;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                this.showError(input, 'This field is required');
            } else {
                this.clearError(input);
            }
        });

        if (!isValid) {
            e.preventDefault();
        }

        return isValid;
    },

    showError(input, message) {
        input.classList.add('border-red-500');
        let errorEl = input.nextElementSibling;
        if (!errorEl || !errorEl.classList.contains('error-message')) {
            errorEl = document.createElement('p');
            errorEl.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
            input.parentNode.insertBefore(errorEl, input.nextSibling);
        }
        errorEl.textContent = message;
    },

    clearError(input) {
        input.classList.remove('border-red-500');
        const errorEl = input.nextElementSibling;
        if (errorEl && errorEl.classList.contains('error-message')) {
            errorEl.remove();
        }
    }
};

/**
 * Loading State Manager
 */
const LoadingManager = {
    show() {
        const loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]';
        loader.innerHTML = `
            <div class="bg-surface-dark rounded-lg p-8 flex flex-col items-center gap-4">
                <div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <p class="text-slate-300">Loading...</p>
            </div>
        `;
        document.body.appendChild(loader);
    },

    hide() {
        const loader = document.getElementById('global-loader');
        if (loader) {
            loader.remove();
        }
    }
};

/**
 * Notification System
 */
const Notifications = {
    show(message, type = 'info', duration = 3000) {
        const container = document.getElementById('notifications-container');
        if (!container) {
            const newContainer = document.createElement('div');
            newContainer.id = 'notifications-container';
            newContainer.className = 'fixed top-4 right-4 z-50 flex flex-col gap-2';
            document.body.appendChild(newContainer);
        }

        const notification = document.createElement('div');
        notification.className = `p-4 rounded-lg text-white fade-in ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            type === 'warning' ? 'bg-yellow-500' : 
            'bg-blue-500'
        }`;
        notification.textContent = message;

        document.getElementById('notifications-container').appendChild(notification);

        if (duration > 0) {
            setTimeout(() => {
                notification.classList.add('opacity-0');
                setTimeout(() => notification.remove(), 300);
            }, duration);
        }
    },

    success(message, duration) {
        this.show(message, 'success', duration);
    },

    error(message, duration) {
        this.show(message, 'error', duration);
    },

    warning(message, duration) {
        this.show(message, 'warning', duration);
    }
};

/**
 * Utility Functions
 */
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    setQueryParam(param, value) {
        const url = new URL(window.location);
        url.searchParams.set(param, value);
        window.history.pushState({}, '', url);
    }
};

/**
 * Initialize everything on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    NavigationManager.init();
    SmoothScroll.init();
    ThemeManager.init();
    StatsAnimator.init();
    FormValidator.init();

    // Track page view
    const pageName = document.title.split(' - ')[0];
    Analytics.trackPageView(pageName);

    // Log initialization
    console.log('SaveIt Platform initialized');
});

/**
 * Global error handling
 */
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    Notifications.error('An unexpected error occurred');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationManager,
        SmoothScroll,
        Analytics,
        ThemeManager,
        StatsAnimator,
        FormValidator,
        LoadingManager,
        Notifications,
        Utils
    };
}
