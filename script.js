// Typing animation
function startTypingAnimation() {
    const text1 = 'Welcome to KRYPT ...';
    const text2 = 'Enter 🔑 to access ...';
    const typingText = document.querySelector('.typing-text');
    let currentText = text1;
    let charIndex = 0;
    let isDeleting = false;
    let isFirstText = true;

    function type() {
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                currentText = isFirstText ? text2 : text1;
                isFirstText = !isFirstText;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, 50);
        } else {
            // Typing text
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
                return;
            }
            setTimeout(type, 100);
        }
    }

    // Start typing
    typingText.textContent = '';
    type();
}

// Add this at the end of script.js
function initializeTabs() {
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and sections
            document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Start animation when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    startTypingAnimation();
    initializeTabs(); // Initialize tabs
}); 