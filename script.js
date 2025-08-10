document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrambleTextPlugin);

    const scrambleElements = document.querySelectorAll(".scramble-text");

    scrambleElements.forEach((el) => {
        gsap.fromTo(el,
            { scrambleText: { text: "▒▒▒▒▒▒▒▒▒▒▒▒", chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 } },
            {
                scrambleText: { text: el.textContent, chars: "!<>-_\\/[]{}—=+*^?#________", speed: 0.5 },
                duration: 1,
                ease: "none"
            }
        );
    });
});