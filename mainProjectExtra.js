const fatherWindow = document.querySelector('.father-window');
document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
    document.body.style.opacity = '1';
   }, 100)
})
// to see de facto winth of viewport 
const infoWindow = document.createElement('div'); 
document.body.appendChild(infoWindow);
infoWindow.className = 'info-window';
window.addEventListener('resize', (event) => {
  const windowWidth = document.body.clientWidth;
  infoWindow.textContent = `${windowWidth}`;
}
);


















// to see de facto winth of viewport 
const infoWindow = document.createElement('div'); 
document.body.appendChild(infoWindow);
infoWindow.className = 'info-window';


window.addEventListener('resize', (event) => {
  const windowWidth = document.body.clientWidth;

  infoWindow.textContent = `${windowWidth}`;


   
}
);

