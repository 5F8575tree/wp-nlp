//we need to import checkURL and formHandler from the client folder
import formHandler from './js/formHandler.js'

//we need to import our main.scss file
import './styles/main.scss'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

//Run the formHandler function
window.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', formHandler);
});