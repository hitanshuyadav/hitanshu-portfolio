let viewMoreSkills = document.querySelector(".view-more");
let viewLessSkills = document.querySelector(".view-less");
let viewMoreProjects = document.querySelector(".view-more-projects");
let viewLessProjects = document.querySelector(".view-less-projects");
let extraProjects = document.querySelectorAll(".extra-projects");
const noProjectsDisplay = document.querySelector(".no-projects");
const sectionLinks = document.querySelectorAll(".section-list a");
const sectionsToObserve = document.querySelectorAll("#about-section, #skills-section, #projects-section, #resume-section, #contact-section");

const setActiveSectionLink = (activeLink) => {
    sectionLinks.forEach((link) => link.classList.remove("active-section"));
    activeLink.classList.add("active-section");
}

const wrapSkills = () => {
    document.querySelectorAll(".tech-stack-cards").forEach((elem, index) => {
        if (index > 5)
            elem.classList.add("hidden");
    })
}

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

wrapSkills();
switchProj();
projectNav();

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

enhanceUI();