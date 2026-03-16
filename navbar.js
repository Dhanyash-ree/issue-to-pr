function loadNavbar() {
    console.log("Loading navbar...");

    const navBar = document.createElement('div');
    navBar.className = 'navbar';

    const homeLink = document.createElement('a');
    homeLink.href = '#home';
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('a');
    aboutLink.href = '#about';
    aboutLink.textContent = 'About';

    const contactUsLink = document.createElement('a');
    contactUsLink.href = '#contact-us';
    contactUsLink.textContent = 'Contact Us';

    navBar.appendChild(homeLink);
    navBar.appendChild(aboutLink);
    navBar.appendChild(contactUsLink);

    document.body.appendChild(navBar);
}
