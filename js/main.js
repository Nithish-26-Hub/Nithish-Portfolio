// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typewriter Effect
const typeWriter = document.getElementById('typewriter');
const phrases = [
    'Prompt Engineer',
    'Web Developer',
    'Web Designer',
    'Decision Maker'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Deleting text
        typeWriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Faster when deleting
    } else {
        // Typing text
        typeWriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal speed when typing
    }
    
    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end of typing
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to next phrase after deleting
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        // Pause before typing new word
        typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
}

// Start the typewriter effect when the page loads
window.addEventListener('load', () => {
    type();
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
    
    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth hover effect for social icons
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Image hover effect
const profileImage = document.querySelector('.image-container');

if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transform = 'scale(1.03)';
    });
    
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'scale(1)';
    });
}
// About section hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Info items hover effect
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.backgroundColor = '#f0f2f5';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.backgroundColor = '#f8f9fa';
        });
    });
    
    // Highlight badges hover effect
    const highlightBadges = document.querySelectorAll('.highlight-badge');
    
    highlightBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.backgroundColor = '#4a6cf7';
            badge.style.color = 'white';
            badge.style.transform = 'translateY(-5px)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.backgroundColor = '#f0f2f5';
            badge.style.color = '#333';
            badge.style.transform = 'translateY(0)';
        });
    });
    
    // About image hover effect
    const aboutImage = document.querySelector('.image-frame');
    
    if (aboutImage) {
        aboutImage.addEventListener('mouseenter', () => {
            aboutImage.style.transform = 'translateY(-10px)';
            aboutImage.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        aboutImage.addEventListener('mouseleave', () => {
            aboutImage.style.transform = 'translateY(0)';
            aboutImage.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
    }
});
// About section hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Info items hover effect with enhanced animation
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px)';
            item.style.backgroundColor = '#5773ACFF';
            item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)';
            item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.backgroundColor = '#55595EFF';
            item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            item.style.transition = 'all 0.3s ease';
        });
    });
    
    // Highlight badges hover effect with pulse animation
    const highlightBadges = document.querySelectorAll('.highlight-badge');
    
    highlightBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.backgroundColor = '#4a6cf7';
            badge.style.color = 'white';
            badge.style.transform = 'translateY(-5px) scale(1.05)';
            badge.style.boxShadow = '0 8px 15px rgba(74, 108, 247, 0.25)';
            badge.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.backgroundColor = '#f0f2f5';
            badge.style.color = '#333';
            badge.style.transform = 'translateY(0) scale(1)';
            badge.style.boxShadow = 'none';
            badge.style.transition = 'all 0.3s ease';
        });
    });
    
    // About image hover effect with 3D tilt
    const aboutImage = document.querySelector('.image-frame');
    
    if (aboutImage) {
        aboutImage.addEventListener('mouseenter', () => {
            aboutImage.style.transform = 'translateY(-15px) rotateY(5deg)';
            aboutImage.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
            aboutImage.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        aboutImage.addEventListener('mouseleave', () => {
            aboutImage.style.transform = 'translateY(0) rotateY(0)';
            aboutImage.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            aboutImage.style.transition = 'all 0.4s ease';
        });
        
        // Add subtle movement on mouse move for 3D effect
        aboutImage.addEventListener('mousemove', (e) => {
            const rect = aboutImage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            aboutImage.style.transform = `translateY(-10px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
        });
    }
    
    // Social icons enhanced hover effect
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-8px) scale(1.1)';
            icon.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            icon.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
            icon.style.boxShadow = 'none';
            icon.style.transition = 'all 0.3s ease';
        });
    });
});
// Skills section hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Skill cards hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            card.style.borderColor = 'rgba(74, 108, 247, 0.5)';
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Enhance the icon inside the card
            const icon = card.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.7)';
            card.style.transition = 'all 0.3s ease';
            
            // Reset the icon
            const icon = card.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        // Add subtle tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            card.style.transform = `translateY(-10px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
        });
    });
});
// Skills section hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Skill cards hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            
            // Get the icon element inside this card
            const icon = card.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
            
            // Animate the skill name
            const skillName = card.querySelector('.skill-name');
            if (skillName) {
                skillName.style.color = '#4a6cf7';
                skillName.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            
            // Reset the icon
            const icon = card.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
            
            // Reset the skill name
            const skillName = card.querySelector('.skill-name');
            if (skillName) {
                skillName.style.color = '#333';
            }
        });
        
        // Add a subtle movement effect on mousemove
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            // Apply a subtle tilt effect
            card.style.transform = `translateY(-10px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
        });
        
        // Reset transform when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            card.style.transition = 'all 0.5s ease';
        });
    });
    
    // For mobile - add touch effects for the horizontal scroll
    if (window.innerWidth <= 480) {
        const skillsGrid = document.querySelector('.skills-grid');
        
        if (skillsGrid) {
            // Add visual feedback when scrolling on mobile
            skillsGrid.addEventListener('scroll', () => {
                const cards = skillsGrid.querySelectorAll('.skill-card');
                
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const centerPosition = window.innerWidth / 2;
                    
                    // Calculate how close the card is to the center of the screen
                    const distanceFromCenter = Math.abs(rect.left + rect.width / 2 - centerPosition);
                    const maxDistance = window.innerWidth / 2;
                    const proximity = 1 - Math.min(distanceFromCenter / maxDistance, 1);
                    
                    // Apply scale based on proximity to center
                    card.style.transform = `scale(${0.95 + (proximity * 0.05)})`;
                    card.style.opacity = 0.7 + (proximity * 0.3);
                });
            });
        }
    }
});
// Projects section hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Project cards hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
            
            // Animate project image
            const projectImage = card.querySelector('.project-image img');
            if (projectImage) {
                projectImage.style.transform = 'scale(1.05)';
                projectImage.style.transition = 'transform 0.5s ease';
            }
            
            // Animate project title
            const projectTitle = card.querySelector('.project-title');
            if (projectTitle) {
                projectTitle.style.color = '#4a6cf7';
                projectTitle.style.transition = 'color 0.3s ease';
            }
            
            // Add subtle glow to tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.backgroundColor = '#eef2ff';
                    tag.style.color = '#4a6cf7';
                    tag.style.boxShadow = '0 2px 8px rgba(74, 108, 247, 0.15)';
                    tag.style.transition = 'all 0.3s ease';
                }, index * 50); // Staggered animation
            });
            
            // Animate project links
            const projectLinks = card.querySelectorAll('.project-link');
            projectLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateY(-5px)';
                    link.style.transition = 'all 0.3s ease';
                }, index * 100); // Staggered animation
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.08)';
            
            // Reset project image
            const projectImage = card.querySelector('.project-image img');
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
            
            // Reset project title
            const projectTitle = card.querySelector('.project-title');
            if (projectTitle) {
                projectTitle.style.color = '#333';
            }
            
            // Reset tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.backgroundColor = '#f0f2f5';
                tag.style.color = '#4a6cf7';
                tag.style.boxShadow = 'none';
            });
            
            // Reset project links
            const projectLinks = card.querySelectorAll('.project-link');
            projectLinks.forEach(link => {
                link.style.transform = 'translateY(0)';
            });
        });
    });
    
    // Mobile touch effects for projects
    if (window.innerWidth <= 576) {
        projectCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
                card.style.transition = 'transform 0.2s ease';
            });
            
            card.addEventListener('touchend', () => {
                card.style.transform = 'scale(1)';
                card.style.transition = 'transform 0.2s ease';
            });
        });
    }
    
    // Animate project cards on scroll
    const animateOnScroll = () => {
        const projectsSection = document.querySelector('.projects-section');
        if (!projectsSection) return;
        
        const sectionPosition = projectsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            // Remove scroll event once animation is done
            window.removeEventListener('scroll', animateOnScroll);
        }
    };
    
    // Set initial state for scroll animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Check initial scroll position (for when page loads already scrolled)
    animateOnScroll();
});
// Education section animations
document.addEventListener('DOMContentLoaded', function() {
    // Set animation delay for education items
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    // Animate education items when they come into view
    const animateEducation = () => {
        const educationSection = document.querySelector('.education-section');
        if (!educationSection) return;
        
        const sectionPosition = educationSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            educationItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
            // Remove scroll event once animation is done
            window.removeEventListener('scroll', animateEducation);
        }
    };
    
    // Add hover effects to education items
    educationItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.education-content');
            marker.style.transform = 'translateY(-5px)';
            marker.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            
            const dot = item.querySelector('::before');
            if (dot) {
                dot.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.education-content');
            marker.style.transform = 'translateY(0)';
            marker.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            
            const dot = item.querySelector('::before');
            if (dot) {
                dot.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add touch effects for mobile
    if (window.innerWidth <= 768) {
        educationItems.forEach(item => {
            item.addEventListener('touchstart', () => {
                const content = item.querySelector('.education-content');
                content.style.transform = 'scale(0.98)';
                content.style.transition = 'transform 0.2s ease';
            });
            
            item.addEventListener('touchend', () => {
                const content = item.querySelector('.education-content');
                content.style.transform = 'scale(1)';
                content.style.transition = 'transform 0.2s ease';
            });
        });
    }
    
    // Check initial scroll position
    window.addEventListener('scroll', animateEducation);
    animateEducation();
    
    // Add smooth scrolling for education section link
    const educationLink = document.querySelector('a[href="#education"]');
    if (educationLink) {
        educationLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const educationSection = document.querySelector('#education');
            if (educationSection) {
                educationSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
// Certificate Gallery Modal and Animations
document.addEventListener('DOMContentLoaded', function() {
    // Create modal for certificate viewing
    const body = document.body;
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.innerHTML = `
        <div class="modal-close"><i class="fas fa-times"></i></div>
        <div class="modal-content">
            <img src="" alt="Certificate">
        </div>
    `;
    body.appendChild(modal);

    // Gallery item click handler
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalImg = modal.querySelector('img');
    const modalClose = modal.querySelector('.modal-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            
            modal.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        body.style.overflow = '';
        
        // Clear image source after animation completes
        setTimeout(() => {
            modalImg.src = '';
        }, 300);
    });

    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modalClose.click();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modalClose.click();
        }
    });

    // Animate certification cards on scroll
    const animateCertifications = () => {
        const certificationCards = document.querySelectorAll('.certification-card');
        
        certificationCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize certification cards for animation
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s ease';
    });

    // Animate competition cards on scroll
    const animateCompetitions = () => {
        const competitionCards = document.querySelectorAll('.competition-card');
        
        competitionCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    };

    // Initialize competition cards for animation
    const competitionCards = document.querySelectorAll('.competition-card');
    competitionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Animate gallery items on scroll
    const animateGallery = () => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 100);
            }
        });
    };

    // Initialize gallery items for animation
    const galleryItemsAnim = document.querySelectorAll('.gallery-item');
    galleryItemsAnim.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    // Mobile horizontal scroll indicator for certificates gallery
    const addScrollIndicator = () => {
        if (window.innerWidth <= 576) {
            const galleryContainer = document.querySelector('.certificates-gallery');
            if (!galleryContainer) return;
            
            // Check if indicator already exists
            if (!document.querySelector('.scroll-indicator-container')) {
                const indicatorContainer = document.createElement('div');
                indicatorContainer.className = 'scroll-indicator-container';
                indicatorContainer.innerHTML = '<div class="scroll-indicator-text">Swipe to see more <i class="fas fa-arrow-right"></i></div>';
                
                const parentElement = galleryContainer.parentElement;
                parentElement.insertBefore(indicatorContainer, galleryContainer.nextSibling);
                
                // Hide indicator after user has scrolled
                galleryContainer.addEventListener('scroll', function() {
                    indicatorContainer.style.opacity = '0';
                    setTimeout(() => {
                        indicatorContainer.remove();
                    }, 500);
                }, { once: true });
                
                // Auto-hide after 5 seconds
                setTimeout(() => {
                    if (document.contains(indicatorContainer)) {
                        indicatorContainer.style.opacity = '0';
                        setTimeout(() => {
                            if (document.contains(indicatorContainer)) {
                                indicatorContainer.remove();
                            }
                        }, 500);
                    }
                }, 5000);
            }
        }
    };

    // Run animations on scroll
    window.addEventListener('scroll', function() {
        animateCertifications();
        animateCompetitions();
        animateGallery();
    });

    // Run animations and add scroll indicator on load
    window.addEventListener('load', function() {
        animateCertifications();
        animateCompetitions();
        animateGallery();
        addScrollIndicator();
    });
    // Update scroll indicator on resize
    window.addEventListener('resize', function() {
        addScrollIndicator();
    });

    // Add hover effects to experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link with form data
            const mailtoLink = `mailto:nithishsj845@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message with animation
            formSuccess.classList.add('active');
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('active');
                }, 5000);
                
            }, 1000);
            
            // Add sending animation to button
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add focus class when input is focused
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        // Remove focus class when input loses focus
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on page load
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Animate contact info items on scroll
    const animateContactInfo = () => {
        const contactInfoItems = document.querySelectorAll('.contact-info-item');
        
        contactInfoItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    };
    
    // Initialize contact info items for animation
    const contactInfoItems = document.querySelectorAll('.contact-info-item');
    contactInfoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease';
    });
    
    // Run animations on scroll
    window.addEventListener('scroll', function() {
        animateContactInfo();   
    });
    
    // Run animations on load
    window.addEventListener('load', function() {
        animateContactInfo();
    });
});
