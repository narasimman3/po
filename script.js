/* ===================================================
   PORTFOLIO JS 2026
   Narasimman S Portfolio
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 800);

    });

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger) {

        hamburger.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

    }

    /* ==========================================
       CLOSE MENU AFTER CLICK
    ========================================== */

    document.querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    /* ==========================================
       TYPING EFFECT
    ========================================== */

    const typingText =
        document.getElementById("typing-text");

    const words = [

        "Aspiring Junior Java Developer",
        "Spring Boot Developer",
        "Full Stack Developer",
        "Software Engineer",
        "Freelancer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord =
            words[wordIndex];

        if (!isDeleting) {

            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;
                }

            }

        }

        setTimeout(
            typeEffect,
            isDeleting ? 50 : 100
        );
    }

    typeEffect();

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                }

            });

        });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >= sectionTop
                &&
                pageYOffset <
                sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(

            ".project-card, .skill-card, .service-card, .education-card"

        );

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(element => {

        element.classList.add("fade-up");

        revealObserver.observe(element);

    });

    /* ==========================================
       HERO IMAGE PARALLAX
    ========================================== */

    const heroImage =
        document.querySelector(".hero-image img");

    window.addEventListener("mousemove", (e) => {

        if (!heroImage) return;

        const x =
            (window.innerWidth / 2 - e.pageX)
            / 50;

        const y =
            (window.innerHeight / 2 - e.pageY)
            / 50;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    /* ==========================================
       COUNTER EFFECT (OPTIONAL)
    ========================================== */

    const counters =
        document.querySelectorAll(".counter");

    const speed = 200;

    counters.forEach(counter => {

        const updateCount = () => {

            const target =
                +counter.getAttribute("data-target");

            const count =
                +counter.innerText;

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + increment);

                setTimeout(updateCount, 10);

            } else {

                counter.innerText = target;

            }

        };

        updateCount();

    });

    /* ==========================================
       PROJECT CARD HOVER EFFECT
    ========================================== */

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(0,200,255,.15),
                #111 40%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#111";

        });

    });

    /* ==========================================
       CURRENT YEAR FOOTER
    ========================================== */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});

/* ===================================================
   END OF FILE
=================================================== */