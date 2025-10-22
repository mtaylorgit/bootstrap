function footerHandler() {
    let currentYear = new Date().getFullYear();//this is dynamic so when year changes it will update
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;
    //© 2023 - All rights reserved
}

footerHandler()

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('header-image').classList.add('d-none');
    document.getElementById('header-paragraph').classList.remove('d-none');
  });

  document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('header-image').classList.remove('d-none');
    document.getElementById('header-paragraph').classList.add('d-none');
  });
});
