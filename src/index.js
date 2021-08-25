import './css/index.css'
console.log("Index.js entry file");

document.querySelector('.btn').addEventListener('click', (evt) => {
  document.querySelector('.menu-sample').classList.toggle('menu-sample_show');
});
