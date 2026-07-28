// -----------------------------
// Portfolio UI element references
// -----------------------------
let viewMoreSkills = document.querySelector(".view-more");
let viewLessSkills = document.querySelector(".view-less");
let viewMoreProjects = document.querySelector(".view-more-projects");
let viewLessProjects = document.querySelector(".view-less-projects");
let extraProjects = document.querySelectorAll(".extra-projects");
const noProjectsDisplay = document.querySelector(".no-projects");
const sectionLinks = document.querySelectorAll(".section-list a");
const sectionsToObserve = document.querySelectorAll("#about-section, #skills-section, #projects-section, #resume-section, #contact-section");

// -----------------------------
// Section navigation helpers
// -----------------------------
const setActiveSectionLink = (activeLink) => {
    sectionLinks.forEach((link) => link.classList.remove("active-section"));
    activeLink.classList.add("active-section");
}

// -----------------------------
// Skills section expand/collapse
// -----------------------------
const wrapSkills = () => {
    document.querySelectorAll(".tech-stack-cards").forEach((elem, index) => {
        if (index > 5)
            elem.classList.add("hidden");
    })
}

// -----------------------------
// Projects section switching logic
// -----------------------------
const switchProj = (i = 0) => {
    document.querySelectorAll(".techwise-projects").forEach((elem, index) => {
        elem.style.display = "";
        if (index == i) {
            if (elem.children.length === 0) {
                noProjectsDisplay.classList.remove("hidden");
                viewMoreProjects.classList.add("hidden");
                viewLessProjects.classList.add("hidden");
            }
            else if (elem.children.length < 4) {
                noProjectsDisplay.classList.add("hidden");
                viewMoreProjects.classList.add("hidden");
                viewLessProjects.classList.add("hidden");
            }
            else {
                noProjectsDisplay.classList.add("hidden");
                viewMoreProjects.classList.remove("hidden");
            }
            return;
        }
        elem.style.display = "none";
    })
}

// -----------------------------
// Project navigation buttons
// -----------------------------
const projectNav = () => {
    document.querySelectorAll(".proj-nav-bar").forEach((elem, ind) => {
        elem.addEventListener("click", () => {
            document.querySelectorAll(".proj-nav-bar").forEach((elem) => {
                elem.classList.remove("active");
            })
            elem.classList.add("active");
            switchProj(ind);
        })
        wrapProjects(ind);
    })
}

// -----------------------------
// Show/hide extra project cards
// -----------------------------
const wrapProjects = (ind) => {
    viewMoreProjects.addEventListener("click", () => {
        extraProjects.forEach((elem, index) => {
            if (index === ind) {
                elem.classList.remove("hidden");
                return;
            }
        })
        viewMoreProjects.classList.add("hidden");
        viewLessProjects.classList.remove("hidden");
    })
    viewLessProjects.addEventListener("click", () => {
        extraProjects.forEach((elem, index) => {
            if (index === ind) {
                elem.classList.add("hidden");
                return;
            }
        })
        viewMoreProjects.classList.remove("hidden");
        viewLessProjects.classList.add("hidden");
    })
}

// Initialize the portfolio sections
wrapSkills();
switchProj();
projectNav();

// -----------------------------
// Smooth section link activation
// -----------------------------
let clickedSectionLink = null;
let sectionNavLockUntil = 0;

sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
        clickedSectionLink = link;
        sectionNavLockUntil = Date.now() + 800;
        setActiveSectionLink(link);
    });
});

let hasScrolledPastHome = false;

// -----------------------------
// Observer for active section tracking
// -----------------------------
const clearActiveSectionLink = () => {
    sectionLinks.forEach((link) => link.classList.remove("active-section"));
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (Date.now() < sectionNavLockUntil) return;

        if (!hasScrolledPastHome && entry.target.id === "about-section") {
            clearActiveSectionLink();
            return;
        }

        if (entry.isIntersecting) {
            const activeLink = document.querySelector(`.section-list a[href="#${entry.target.id}"]`);
            if (activeLink) {
                setActiveSectionLink(activeLink);
            }
        }
    });
}, {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.1
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        hasScrolledPastHome = true;
    } else {
        clearActiveSectionLink();
        clickedSectionLink = null;
    }
}, { once: false });

sectionsToObserve.forEach((section) => sectionObserver.observe(section));

// -----------------------------
// Skills expand/collapse behavior
// -----------------------------
viewMoreSkills.addEventListener("click", () => {
    viewMoreSkills.style.display = "none";
    viewLessSkills.classList.remove("hidden");
    document.querySelectorAll(".tech-stack-cards").forEach(elem => {
        elem.classList.remove("hidden");
    })
})

viewLessSkills.addEventListener("click", () => {
    viewMoreSkills.style.display = "";
    viewLessSkills.classList.add("hidden");
    wrapSkills();
})

// -----------------------------
// Social and navigation redirects
// -----------------------------
const socialMediaRedirects = () => {
    document.getElementById("email-box").addEventListener("click", () => {
        window.open("mailto:hitanshuy76@gmail.com");
    })
    document.getElementById("github-box").addEventListener("click", () => {
        window.open("https://github.com/hitanshuyadav");
    })
    document.getElementById("linkedin-box").addEventListener("click", () => {
        window.open("https://linkedin.com/in/hitanshu-yadav-b0467a38a");
    })
    document.getElementById("medium-box").addEventListener("click", () => {
        window.open("https://medium.com/@hitanshuy76");
    })
    document.querySelector(".scroll-section-displayer").addEventListener("click", () => {
        window.location.href = "#about-section";
    })
    document.querySelector(".back-to-top").addEventListener("click", () => {
        window.location.href = "#";
    })
}

socialMediaRedirects();

// -----------------------------
// UI enhancement behaviors
// -----------------------------
const enhanceUI = () => {
    const projectCards = document.querySelectorAll(".major-project-cards");
    const skillGroups = document.querySelectorAll(".tech-skill-used");
    const allTechnicalProjects = document.querySelectorAll(".evergreen-projects");
    const allTechnicalSkills = document.querySelectorAll(".all-technical-projects .tech-skill-used");
    const socialMediaBoxes = document.querySelectorAll(".social-boxes");
    const iconRotate = document.querySelectorAll(".social-icon-box");
    const socialId = document.querySelectorAll(".social-id");
    const arrowBtn = document.querySelectorAll(".arrow-btn-box");

    // Major Projects Hover Effects
    projectCards.forEach((card, index) => {
        const skillGroup = skillGroups[index];

        if (!skillGroup) return;

        card.addEventListener("mouseenter", () => {
            skillGroup.querySelectorAll("p").forEach((el) => {
                el.classList.add("glassy-tag-exp");
                el.style.fontFamily = "var(--font-sans)";
            });
        });

        card.addEventListener("mouseleave", () => {
            skillGroup.querySelectorAll("p").forEach((el) => {
                el.classList.remove("glassy-tag-exp");
            });
        });
    });

    // Technical Projects Hover Effects 
    allTechnicalProjects.forEach((card, index) => {
        const skillGroup = allTechnicalSkills[index];

        if (!skillGroup) return;

        card.addEventListener("mouseenter", () => {
            skillGroup.querySelectorAll("p").forEach((el) => {
                el.classList.add("glassy-tag-exp");
                el.style.fontFamily = "var(--font-sans)";
            });
        });

        card.addEventListener("mouseleave", () => {
            skillGroup.querySelectorAll("p").forEach((el) => {
                el.classList.remove("glassy-tag-exp");
            });
        });
    });

    // Contact Section Hover Effects
    socialMediaBoxes.forEach((elem, index) => {
        const icon = iconRotate[index];
        const sid = socialId[index];
        const arrow = arrowBtn[index];

        elem.addEventListener("mouseenter", () => {
            icon.style.transform = "rotate(-5deg)";
            sid.style.color = "var(--clr-accent)";
            arrow.style.color = "var(--clr-accent)";
        });
        
        elem.addEventListener("mouseleave", () => {
            icon.style.transform = "rotate(0deg)";
            sid.style.color = "";
            arrow.style.color = "";
        });
    })
};

// -----------------------------
// Scroll reveal behavior
// -----------------------------
const revealOnScroll = () => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (elements.length === 0) return;

    const revealElement = (element) => {
        if (!element.classList.contains("is-visible")) {
            element.classList.add("is-visible");
        }
    };

    const revealVisibleElements = () => {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
                revealElement(element);
            }
        });
    };

    if (typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    revealElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elements.forEach((element) => observer.observe(element));
    }

    revealVisibleElements();
    window.addEventListener("load", revealVisibleElements, { once: true });
    window.addEventListener("scroll", revealVisibleElements, { once: false });
    window.addEventListener("resize", revealVisibleElements, { once: false });
};

enhanceUI();
revealOnScroll();

// -----------------------------
// Sidebar open/close behavior
// -----------------------------
const sidebarWrapper = () => {
    const sidebar = document.querySelector("aside");
    const overlay = document.querySelector(".overlay");

    document.querySelector(".fa-list").addEventListener("click", () => {
        sidebar.style.animation = "open-side .1s linear forwards";
        overlay.classList.remove("hidden");
    })
    document.querySelector(".fa-x").addEventListener("click", () => {
        sidebar.style.animation = "close-side .1s linear forwards";
        overlay.classList.add("hidden");
    })
    overlay.addEventListener("click", () => {
        sidebar.style.animation = "close-side .1s linear forwards";
        overlay.classList.add("hidden");
    })

    document.querySelectorAll(".clicked").forEach(elem => {
        elem.addEventListener("click", () => {
            sidebar.style.animation = "close-side .1s linear forwards";
            overlay.classList.add("hidden");
        })
    })

}

sidebarWrapper();