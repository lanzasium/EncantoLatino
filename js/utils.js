// Utilities
window.EncantoUtils = {
    showToast: function(options) {
        const TOAST_ICONS = {
            success: 'fa-circle-check',
            error: 'fa-circle-xmark',
            warning: 'fa-triangle-exclamation',
            info: 'fa-circle-info'
        };

        const {
            type = 'info',
            title = '',
            message = '',
            duration = 5000,
            closeable = true
        } = options;

        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toastId = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.id = toastId;
        toast.setAttribute('role', 'alert');

        const iconClass = TOAST_ICONS[type] || TOAST_ICONS.info;

        toast.innerHTML = `
            <i class="fa-solid ${iconClass} toast-icon"></i>
            <div class="toast-content">
            ${title ? `<div class="toast-title">${this.escapeHtml(title)}</div>` : ''}
            <div class="toast-message">${this.escapeHtml(message)}</div>
            </div>
            ${closeable ? '<button class="toast-close" aria-label="Close"><i class="fa-solid fa-times"></i></button>' : ''}
        `;

        toastContainer.appendChild(toast);

        if (closeable) {
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', () => this.removeToast(toastId));
        }

        if (duration > 0) {
            setTimeout(() => this.removeToast(toastId), duration);
        }

        return toastId;
    },

    removeToast: function(toastId) {
        const toast = document.getElementById(toastId);
        if (!toast) return;

        toast.classList.add('hiding');
        setTimeout(() => {
            if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
            }
        }, 300);
    },

    escapeHtml: function(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;',
            '/': '&#x2F;'
        };
        return String(text).replace(/[&<>"'\/]/g, char => map[char]);
    }
};
