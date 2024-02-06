function footerHandler() {
    let currentYear = new Date().getFullYear();//this is dynamic so when year changes it will update
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;
    //© 2023 - All rights reserved
}

footerHandler()