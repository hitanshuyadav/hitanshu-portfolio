let viewMoreSkills = document.querySelector(".view-more");
let viewLessSkills = document.querySelector(".view-less");

const wrapSkills = () => {
    document.querySelectorAll(".tech-stack-cards").forEach((elem, index) => {
        if (index > 5)
            elem.classList.add("hidden");
    })
}

wrapSkills();

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

