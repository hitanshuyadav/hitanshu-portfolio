let viewMoreSkills = document.querySelector(".view-more");
let viewLessSkills = document.querySelector(".view-less");
let viewMoreProjects = document.querySelector(".view-more-projects");
let viewLessProjects = document.querySelector(".view-less-projects");
let extraProjects = document.querySelectorAll(".extra-projects");
const noProjectsDisplay = document.querySelector(".no-projects");

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
            }
            else if (elem.children.length < 4) {
                noProjectsDisplay.classList.add("hidden");
                viewMoreProjects.classList.add("hidden");
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

