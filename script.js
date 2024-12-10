// function toggleMenu() {
//     const menu = document.querySelector(".navbar .menu");
//     const hamburgerMenu = document.querySelector(".hamburger-menu");
//     menu.classList.toggle("active");
//     hamburgerMenu.classList.toggle("active");
//   }

//   // Function to close the menu
//   function closeMenu() {
//     const menu = document.querySelector(".navbar .menu");
//     const hamburgerMenu = document.querySelector(".hamburger-menu");
//     menu.classList.remove("active");
//     hamburgerMenu.classList.remove("active");
//   }

//   // Close menu if clicking outside of it
//   document.addEventListener('click', function(event) {
//     const menu = document.querySelector(".navbar .menu");
//     const hamburgerMenu = document.querySelector(".hamburger-menu");
//     const isClickInsideMenu = menu.contains(event.target);
//     const isClickOnHamburger = hamburgerMenu.contains(event.target);

//     if (!isClickInsideMenu && !isClickOnHamburger) {
//       menu.classList.remove("active");
//       hamburgerMenu.classList.remove("active");
//     }
//   });