const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const securitySpecialist = document.querySelector('#security-specialist');
const securitySpecialistInfo = document.querySelector('#security-specialist-info');

securitySpecialist.addEventListener('click', function() {
    securitySpecialistInfo.classList.toggle('active');
})

const itIntern = document.querySelector('#it-intern');
const itInternInfo = document.querySelector('#it-intern-info');

itIntern.addEventListener('click', function() {
    itInternInfo.classList.toggle('active');
})

const serviceCoordinator = document.querySelector('#service-coordinator');
const serviceCoordinatorInfo = document.querySelector('#service-coordinator-info');

serviceCoordinator.addEventListener('click', function() {
    serviceCoordinatorInfo.classList.toggle('active');
})

const gvsu = document.querySelector('#gvsu');
const gvsuInfo = document.querySelector('#gvsu-info');

gvsu.addEventListener('click', function() {
    gvsuInfo.classList.toggle('active');
})