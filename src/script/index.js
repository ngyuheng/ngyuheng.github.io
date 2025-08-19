function scrollToHero() {
    const heroSection = document.querySelector('.hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    const projectsSection = document.querySelector('.projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToResearch() {
    const researchSection = document.querySelector('.research');
    researchSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAchievements() {
    const achievementsSection = document.querySelector('.achievements');
    achievementsSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-icon');

    if (document.documentElement.classList.contains('dark-mode')) {
        toggleButton.src = 'src/icons/light-mode.svg';
    } else {
        toggleButton.src = 'src/icons/dark-mode.svg';
    }

    localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
}