document.getElementById("enable-js").remove();

document.addEventListener("keydown", (e) => {
    if (e.key == ' ' | e.key == 'ArrowDown' | e.key == 'ArrowRight' | e.key == 'PageDown') {
        e.preventDefault();
        const vh = Math.round(document.getElementById("start-pane").getBoundingClientRect().height);
        const scrollPos = Math.round(scrollY);
        window.scrollTo({top: (Math.round(scrollPos / vh)+1)*vh, behavior: "smooth"});
    }
    if (e.key == 'ArrowUp' | e.key == 'ArrowLeft' | e.key == 'PageUp') {
        e.preventDefault();
        const vh = Math.round(document.getElementById("start-pane").getBoundingClientRect().height);
        const scrollPos = Math.round(scrollY);
        window.scrollTo({top: (Math.round(scrollPos / vh)-1)*vh, behavior: "smooth"});
    }
});

document.addEventListener("scroll", (e) => {
    console.log(e);
})