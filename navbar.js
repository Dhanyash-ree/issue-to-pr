function loadNavbar() {
    console.log("Loading navbar...");

    const navBar = document.createElement('div');
    navBar.className = 'navbar';

    const homeLink = document.createElement('a');
    homeLink.href = '#home';
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('a');
    aboutLink.href = '#about'; // Update the URL to match the new About page
    aboutLink.textContent = 'AboutuS'; // Corrected the text

    const contactUsLink = document.createElement('a');
    contactUsLink.href = '#contact-us';
    contactUsLink.textContent = 'Contact Us';

    navBar.appendChild(homeLink);
    navBar.appendChild(aboutLink); // Update to append the new about link
    navBar.appendChild(contactUsLink);

    document.body.appendChild(navBar);
}
