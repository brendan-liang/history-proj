document.getElementById("enable-js").remove();

document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == ' ' | e.key == 'ArrowDown' | e.key == 'ArrowRight') {
        e.preventDefault();
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        window.scrollTo({top: (Math.floor(scrollY / vh)+1)*vh, behavior: "smooth"});
    }
    if (e.key == 'ArrowUp' | e.key == 'ArrowLeft') {
        e.preventDefault();
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        window.scrollTo({top: (Math.floor(scrollY / vh)-1)*vh, behavior: "smooth"});
    }
})