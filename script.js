// ============================================
// BACKBRIDGE INTEGRATED SOLUTIONS - MODERN 2025 SCRIPTS
// ============================================

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Header scroll effect with fade
let header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.classList.add('scrolled');
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.classList.remove('scrolled');
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// GSAP Animations
if (typeof gsap !== 'undefined') {
    // Hero text animation
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        gsap.fromTo(heroText.children,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            }
        );
    }

    // Hero image animation
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        gsap.fromTo(heroImage,
            {
                opacity: 0,
                scale: 0.8,
                x: 50
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power3.out'
            }
        );
    }

    // Fade-up animations with ScrollTrigger
    gsap.utils.toArray('.fade-up').forEach((element) => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Glass cards stagger animation
    gsap.utils.toArray('.glass-card').forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 30,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Timeline steps stagger animation
    gsap.utils.toArray('.timeline-step, .journey-step').forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                scale: 0.8,
                y: 30
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Leadership cards animation
    gsap.utils.toArray('.leadership-card').forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                x: -50,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Outcome cards animation
    gsap.utils.toArray('.outcome-card').forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 30,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Header slide-in animation
    const header = document.getElementById('header');
    if (header) {
        gsap.fromTo('#header',
            {
                y: -100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }

    // Parallax effect for hero backgrounds
    gsap.utils.toArray('.hero-section').forEach((section) => {
        const bg = section.querySelector('.absolute');
        if (bg) {
            gsap.to(bg, {
                y: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    });
}

// Counter Animation for Metrics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? Math.floor(target) : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        }
    }, 16);
}

// Initialize counter animations
if (typeof gsap !== 'undefined') {
    gsap.utils.toArray('.counter-number').forEach((element) => {
        const target = parseFloat(element.getAttribute('data-target'));
        if (target) {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 85%',
                onEnter: () => {
                    animateCounter(element, target);
                }
            });
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message with animation
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            successMessage.classList.add('success-animation');
            
            // Animate success icon
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(successMessage,
                    {
                        opacity: 0,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'back.out(1.7)'
                    }
                );
            }
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(successMessage, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        onComplete: () => {
                            successMessage.classList.add('hidden');
                        }
                    });
                } else {
                    successMessage.classList.add('hidden');
                }
            }, 5000);
        } else {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        }
        
        // In production, you would send this data to your server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Show success message
        //     form.reset();
        // })
        // .catch(error => {
        //     alert('Something went wrong. Please try again.');
        // });
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href]');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav-active');
        } else {
            link.classList.remove('nav-active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    
    // Re-initialize icons after page load
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Refresh icons after animations
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 1000);
});

// Smooth hover effects for buttons
document.querySelectorAll('a[class*="bg-gradient"], button[class*="bg-gradient"]').forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (typeof gsap !== 'undefined') {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    button.addEventListener('mouseleave', function() {
        if (typeof gsap !== 'undefined') {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});
