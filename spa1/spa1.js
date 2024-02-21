const divEl = document.getElementById('main-content');

const homeEl = document.getElementById("home")
const aboutEl = document.getElementById('about');
const contactEl = document.getElementById('contact');

const pages = {
    '/spa1/spa1.html': "<h2>Welcome to the Home Page</h2>",
    '/spa1/spa1.html/about': "<h2>About Us</h2><p>This is the about page content.</p>",
    '/spa1/spa1.html/contact': "<h2>Contact Us</h2><p>Feel free to reach out to us!</p>"
};
 
function navigateTo() {
    const path = window.location.pathname;
    divEl.innerHTML = pages[path] || '<h3>Page not found</h3>';
}
 
homeEl.addEventListener('click', (e)=> {
    e.preventDefault();
    const path = homeEl.getAttribute('href');
    console.log("path :" +path);
    history.pushState(null, null, path);
    navigateTo();
});

aboutEl.addEventListener('click', (e)=> {
    e.preventDefault();
    const path = aboutEl.getAttribute('href');
    history.pushState(null, null, path);
    navigateTo();
});

contactEl.addEventListener('click', (e)=> {
    e.preventDefault();
    const path = contactEl.getAttribute('href');
    history.pushState(null, null, path);
    navigateTo();
});

window.addEventListener('popstate', navigateTo)

navigateTo();