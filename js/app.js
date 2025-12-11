document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        } else {
            console.warn('Lucide icons not loaded');
        }
    } catch (e) {
        console.warn('Error initializing Lucide icons:', e);
    }

    // Elements
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Navbar Scroll Effect (Dark Theme - Glass)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(16px)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = '1px solid transparent';
            navbar.classList.remove('py-4');
            navbar.classList.add('py-6');
        }
    });

    // Mobile Menu Operations
    function openMenu() {
        mobileMenu.classList.remove('hidden');
        // Slight delay to allow display:block to apply before transition
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            document.body.style.overflow = 'hidden';
        }, 10);
    }

    function closeMenu() {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }, 500); // Match transition duration
    }

    menuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Smooth Scrolling with Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Cinematic Reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial setup for reveal elements - use CSS class instead of inline style
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // --- Modal Logic ---
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const modalDownload = document.getElementById('modal-download');
    const modalContent = modal.querySelector('.modal-content');
    const modalBackdrop = modal.querySelector('.modal-backdrop');

    // Open Modal
    // We attach listeners to any element with 'data-zoom-src'
    // Since images are dynamically loaded later, we can use delegation or static for now.
    // The placeholder cards don't have images yet, but let's persist the logic.

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-zoom-src]');
        if (trigger) {
            e.preventDefault();
            const src = trigger.getAttribute('data-zoom-src');
            modalImage.src = src;
            modalDownload.href = src;

            modal.classList.remove('hidden');
            // Transition In
            requestAnimationFrame(() => {
                modalBackdrop.classList.remove('modal-backdrop-enter');
                modalBackdrop.classList.add('modal-backdrop-enter-active');

                modalContent.classList.remove('modal-content-enter');
                modalContent.classList.add('modal-content-enter-active');
            });

            document.body.style.overflow = 'hidden';
        }
    });

    function hideModal() {
        // Transition Out
        modalBackdrop.classList.remove('modal-backdrop-enter-active');
        modalBackdrop.classList.add('modal-backdrop-exit-active');

        modalContent.classList.remove('modal-content-enter-active');
        modalContent.classList.add('modal-content-exit-active');

        setTimeout(() => {
            modal.classList.add('hidden');
            modalBackdrop.classList.remove('modal-backdrop-exit-active');
            modalContent.classList.remove('modal-content-exit-active');
            modalImage.src = '';
            document.body.style.overflow = '';
        }, 300);
    }

    if (modalClose) modalClose.addEventListener('click', hideModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                hideModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            hideModal();
        }
    });

    // --- Episode 4 Style Toggle ---
    const ep4Pills = document.querySelectorAll('.ep4-section .style-pill');
    const ep4IllustrationSection = document.getElementById('ep4-illustration-section');
    const ep4RealismSection = document.getElementById('ep4-realism-section');

    if (ep4Pills.length > 0 && ep4IllustrationSection && ep4RealismSection) {
        ep4Pills.forEach(pill => {
            pill.addEventListener('click', () => {
                // Update active state on pills
                ep4Pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                const style = pill.getAttribute('data-style');

                if (style === 'ep4-illustration') {
                    ep4IllustrationSection.style.display = 'block';
                    ep4RealismSection.style.display = 'none';
                } else if (style === 'ep4-realism') {
                    ep4IllustrationSection.style.display = 'none';
                    ep4RealismSection.style.display = 'block';
                }
            });
        });
    }

    // --- Episode 6 Gallery Logic ---
    const ep6MainImage = document.getElementById('ep6-main-image');
    const ep6MainDisplay = document.getElementById('ep6-main-display'); // wrapper for zoom
    const ep6Thumbs = document.querySelectorAll('.ep6-thumb');
    let currentEp6Index = 0;

    if (ep6MainImage && ep6Thumbs.length > 0) {
        // Collect image sources
        const ep6Images = Array.from(ep6Thumbs).map(thumb => {
            const img = thumb.querySelector('img');
            return img.getAttribute('src');
        });

        // Make functions global for inline onclick
        window.setEp6Slide = (index) => {
            if (index < 0) index = ep6Images.length - 1;
            if (index >= ep6Images.length) index = 0;

            currentEp6Index = index;

            // Fade out
            ep6MainImage.style.opacity = '0.6';

            setTimeout(() => {
                // Change src
                ep6MainImage.src = ep6Images[index];
                // Update zoom data for modal
                if (ep6MainDisplay) {
                    ep6MainDisplay.setAttribute('data-zoom-src', ep6Images[index]);
                }
                // Fade in
                ep6MainImage.style.opacity = '1';
            }, 200);

            // Update Active Thumb
            ep6Thumbs.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });

            // Scroll thumb into view if needed
            const activeThumb = ep6Thumbs[index];
            activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        };

        window.changeEp6Slide = (direction) => {
            window.setEp6Slide(currentEp6Index + direction);
        };
    }

    // --- Episode 4 Style Tag Animation ---
    const ep4StyleTag = document.getElementById('ep4-style-tag');
    const ep4RealismTrigger = document.getElementById('ep4-realism-trigger');
    const ep4IllustrationTrigger = document.getElementById('ep4-illustration-trigger');

    if (ep4StyleTag && ep4RealismTrigger && ep4IllustrationTrigger) {

        const updateStyleTag = (text, addHighlight) => {
            // Only update if changed avoiding unnecessary animations
            if (ep4StyleTag.textContent !== text) {
                ep4StyleTag.style.opacity = '0';
                setTimeout(() => {
                    ep4StyleTag.textContent = text;
                    ep4StyleTag.style.opacity = '1';
                    if (addHighlight) {
                        ep4StyleTag.classList.add('text-highlight-box');
                    } else {
                        ep4StyleTag.classList.remove('text-highlight-box');
                    }
                }, 300);
            }
        };

        const styleTagObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'ep4-realism-trigger') {
                        updateStyleTag('Realism', true);
                    } else if (entry.target.id === 'ep4-illustration-trigger') {
                        updateStyleTag('Illustration', false);
                    }
                }
            });
        }, {
            threshold: 0.2, // increased threshold for better "alignment" feel
            rootMargin: "-10% 0px -10% 0px" // Trigger when element is more centrally visible
        });

        styleTagObserver.observe(ep4RealismTrigger);
        styleTagObserver.observe(ep4IllustrationTrigger);
    }


    // --- Bulk Image Download Logic ---
    const downloadBtn = document.getElementById('download-all-btn');
    const downloadStatus = document.getElementById('download-status');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            // Check if JSZip is loaded
            if (typeof JSZip === 'undefined') {
                console.error('JSZip library not loaded');
                alert('Error: ZIP library not loaded. Please try again later.');
                return;
            }

            if (downloadBtn.classList.contains('processing')) return;

            try {
                // UI Feedback
                downloadBtn.classList.add('processing');
                downloadBtn.style.opacity = '0.7';
                downloadBtn.querySelector('span').textContent = 'Zipping...';
                downloadStatus.textContent = 'Scanning images...';
                downloadStatus.classList.remove('hidden');

                const zip = new JSZip();

                // Collect all image sources
                // Only targeting images intended for gallery/modal (usually have data-zoom-src)
                // If not, we fall back to src
                const uniqueImages = new Set();
                const imageElements = document.querySelectorAll('[data-zoom-src], img[src*="ep"]'); // Basic filter for project images

                imageElements.forEach(el => {
                    let src = el.getAttribute('data-zoom-src') || el.src;
                    if (src) {
                        // Normalize path: remove host if present (for local testing mostly or just standardizing)
                        try {
                            const url = new URL(src, window.location.href);
                            src = url.pathname.substring(1); // remove leading slash
                            // Clean up double slashes if any
                            src = src.replace('//', '/');
                            // If path starts with /, remove it again if needed
                            if (src.startsWith('/')) src = src.substring(1);

                            // Clean up specific route prefix if present (for clean zip structure)
                            if (src.startsWith('lovedoesnothurt/')) {
                                src = src.substring('lovedoesnothurt/'.length);
                            }
                        } catch (err) {
                            // If not a full URL (relative), keep as is but clean
                            if (src.startsWith('/')) src = src.substring(1);
                        }

                        // Filter out external images or icons if needed, but "ep" filter helps
                        // Let's rely on the set to dedupe
                        if (src && !src.includes('lucide') && !src.includes('data:')) {
                            uniqueImages.add(src);
                        }
                    }
                });

                const total = uniqueImages.size;
                let processed = 0;

                downloadStatus.textContent = `Processing 0/${total} images...`;

                const fetchPromises = Array.from(uniqueImages).map(async (imgPath) => {
                    try {
                        const response = await fetch(imgPath);
                        if (!response.ok) throw new Error(`Failed to fetch ${imgPath}`);
                        const blob = await response.blob();

                        // Add to zip, preserving structure
                        // imgPath is like "ep1/1.png" -> zip handles folders automatically
                        zip.file(imgPath, blob);

                        processed++;
                        downloadStatus.textContent = `Processing ${processed}/${total} images...`;
                    } catch (err) {
                        console.warn(`Could not download image: ${imgPath}`, err);
                        // Continue without this image
                    }
                });

                await Promise.all(fetchPromises);

                downloadStatus.textContent = 'Generating ZIP file...';
                const content = await zip.generateAsync({ type: "blob" });

                // Trigger download
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = "LoveHurts_CreativeTreatment_Images.zip";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);

                // Reset UI
                downloadStatus.textContent = 'Download started!';
                setTimeout(() => {
                    downloadStatus.classList.add('hidden');
                    downloadBtn.querySelector('span').textContent = 'Download All Images';
                    downloadBtn.classList.remove('processing');
                    downloadBtn.style.opacity = '1';
                }, 3000);

            } catch (error) {
                console.error('Download failed:', error);
                downloadStatus.textContent = 'Error creating ZIP. See console.';
                downloadBtn.querySelector('span').textContent = 'Retry Download';
                downloadBtn.classList.remove('processing');
                downloadBtn.style.opacity = '1';
            }
        });
    }

    // --- Safety Fallback for Black Screen Issues ---
    setTimeout(() => {
        document.querySelectorAll('.reveal-hidden').forEach(el => {
            el.classList.remove('reveal-hidden');
            el.classList.add('animate-reveal');
        });
    }, 2000);

    // --- Variables Selection Logic ---
    const artOptions = document.querySelectorAll('.art-option');

    artOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Find container of siblings
            const container = this.closest('.md\\:col-span-8') || this.parentElement;
            if (!container) return;

            // Remove active from siblings in this container
            const siblings = container.querySelectorAll('.art-option');
            siblings.forEach(sib => sib.classList.remove('active'));

            // Add active to clicked
            this.classList.add('active');
        });
    });

});
