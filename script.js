document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrambleTextPlugin);

    const scrambleElements = document.querySelectorAll(".scramble-text");

    scrambleElements.forEach((el) => {
        // Store the original text
        const originalText = el.textContent;

        // Initial scramble animation on page load
        gsap.fromTo(el,
            { scrambleText: { text: "▒▒▒▒▒▒▒▒▒▒▒▒", chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 } },
            {
                scrambleText: { text: originalText, chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 },
                duration: 1,
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