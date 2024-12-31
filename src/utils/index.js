
export const currentYear = () => new Date().getFullYear();

export const highlightText = (text) => {
    return <span>{text}</span>;
}

export const scrollToSection = (el) => {
    el.preventDefault();
    const currTarget = document.querySelector(`${el.target.getAttribute('data-loc')}`);
    window.scrollTo(0, currTarget.offsetTop + 120);
}