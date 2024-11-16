window.onload = function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links-dropdown');
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.onclick = function(event) {
        if (!event.target.matches('.menu-toggle')) {
            navLinks.classList.remove('active');
        }

        const popup = document.getElementById("popup");
        if (event.target === popup) {
            closeModal();
        }
    };

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
    }
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', '');
        }
    });
}

function loadPage(button) {

    let pages = document.getElementsByClassName("content_page");
    for(var index=0;index < pages.length;index++){
        pages[index].classList.add("hide_content");
     }
    document.getElementById(button.classList[0] + "_page").classList.remove("hide_content");

    let pageButtons = document.getElementsByClassName("page-button");
    for(var index=0;index < pageButtons.length;index++){
        pageButtons[index].classList.remove("underlined");
    }

    let currentPageButtons = document.getElementsByClassName(button.classList[0]);
    for(var index=0;index < currentPageButtons.length;index++){
        currentPageButtons[index].classList.add("underlined");
    }

    return;
}

function openModal(event) {
    if (isMobile()) return;
    let popUp = document.getElementById("popup");
    let popUpElements = popUp.getElementsByTagName("*");
    let eventNodes = event.getElementsByTagName("*");
    popUpElements["popup_heading"].innerHTML = eventNodes[event.id + "_header"].innerHTML;
    popUpElements["popup_image"].setAttribute("src", eventNodes[event.id +"_image"].getAttribute("src"));
    popUpElements["popup_text"].innerHTML = eventNodes[event.id + "_text"].innerHTML + eventNodes[event.id + "_text_hidden"].innerHTML;
    document.getElementById("popup").style.display = "flex";
}

function closeModal() {
    document.getElementById("popup").style.display = "none";
}

function isMobile(){
    return window.innerWidth <= 680;
}