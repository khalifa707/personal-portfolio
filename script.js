document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrambleTextPlugin, SplitText);

    gsap.fromTo(".hero-img-wrapper",
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 0.5,
            ease: "power2.out"
        }
    );

    const scrambleElements = document.querySelectorAll(".scramble-text");
    const splitTextElements = document.querySelectorAll(".primary-text-header");

    splitTextElements.forEach((el) => {
        // Split text into lines
        const splitText = new SplitText(el, { type: "lines" });
        const lines = splitText.lines;

        // Create mask container for each line
        lines.forEach((line) => {
            // Wrap each line in a container with overflow hidden
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);

            // Set initial state - lines start from below
            gsap.set(line, { y: "100%" });
        });

        // Animate lines with stagger
        gsap.to(lines, {
            y: "0%",
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.5
        });
    });

    scrambleElements.forEach((el) => {
        // Store the original text
        const originalText = el.textContent;

        // Initial scramble animation on page load
        gsap.fromTo(el,
            { scrambleText: { text: "▒▒▒▒▒▒▒▒▒▒▒▒", chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 } },
            {
                scrambleText: { text: originalText, chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 },
                duration: 1.5,
                ease: "none"
            }
        );

        // Hover effect
        el.addEventListener("mouseenter", () => {
            gsap.to(el, {
                scrambleText: {
                    text: originalText,
                    chars: "!<>-_\\/[]{}—=+*^?#________",
                    speed: 0.8,
                    revealDelay: 0.2
                },
                duration: 0.6,
                ease: "none"
            });
        });

        // Optional: Reset on mouse leave for continuous effect
        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                scrambleText: {
                    text: originalText,
                    chars: "!<>-_\\/[]{}—=+*^?#________",
                    speed: 0.3
                },
                duration: 0.4,
                ease: "none"
            });
        });
    });
});