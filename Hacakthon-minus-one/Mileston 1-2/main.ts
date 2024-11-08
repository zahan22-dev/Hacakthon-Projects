// Making skills button
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        } else {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
});
