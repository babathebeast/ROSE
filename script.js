// Interactive heart click function - opens Valentine proposal page
function showSurprise() {
    try {
        console.log('Heart clicked - navigating to proposal page');
        // Navigate immediately to proposal page
        window.location.href = './valentine-proposal.html';
    } catch (error) {
        console.error('Error navigating:', error);
        // Fallback - try without the ./
        window.location.href = 'valentine-proposal.html';
    }
}

// Create sparkle effect
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        createSparkle(centerX, centerY);
    }
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    // Random direction for sparkle
    const angle = (Math.PI * 2 * i) / 12;
    const distance = 50 + Math.random() * 50;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    
    sparkle.style.setProperty('--endX', endX + 'px');
    sparkle.style.setProperty('--endY', endY + 'px');
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Add sparkle animation CSS
const sparkleCSS = `
@keyframes sparkleAnimation {
    0% {
        transform: translate(0, 0) scale(0);
        opacity: 1;
    }
    50% {
        transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0);
        opacity: 0;
    }
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for entrance animations
    const sections = document.querySelectorAll('.love-message, .photo-gallery, .interactive-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add click handlers for photo placeholders
document.addEventListener('DOMContentLoaded', function() {
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('💕 Add your favorite photos here! You can replace these placeholders with actual images of your special moments together.');
        });
    });
});

// Random love quotes that appear on page load
const loveQuotes = [
    "You are my today and all of my tomorrows 💕",
    "In a sea of people, my eyes will always search for you 👀❤️",
    "You make my heart smile 😊💖",
    "Every love story is beautiful, but ours is my favorite 📖💕",
    "You are my sunshine on a cloudy day ☀️💛"
];

// Show random quote on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        
        // Create quote popup
        const quotePopup = document.createElement('div');
        quotePopup.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.95);
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                max-width: 300px;
                font-family: 'Dancing Script', cursive;
                font-size: 1.2rem;
                color: #d63384;
                text-align: center;
                animation: slideInRight 0.5s ease-out;
                cursor: pointer;
            " onclick="this.parentNode.removeChild(this)">
                ${randomQuote}
                <div style="font-size: 0.8rem; margin-top: 10px; opacity: 0.7;">Click to close</div>
            </div>
        `;
        
        document.body.appendChild(quotePopup);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (quotePopup.parentNode) {
                quotePopup.style.animation = 'slideOutRight 0.5s ease-out';
                setTimeout(() => {
                    if (quotePopup.parentNode) {
                        quotePopup.parentNode.removeChild(quotePopup);
                    }
                }, 500);
            }
        }, 5000);
    }, 2000);
});

// Add slide animations CSS
const slideCSS = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
`;

const slideStyle = document.createElement('style');
slideStyle.textContent = slideCSS;
document.head.appendChild(slideStyle);