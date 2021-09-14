import './css/index.css';
import {toggleActive} from './js/handlers';
import {fixViewportHeight} from './js/utils';

console.log('Main index.js entry file');

const navSelector = 'menu__nav-wrapper';
const navSelectorActive = 'menu__nav-wrapper_active';
const navBtnSelector = 'js-nav-menu-icon';

function toggleNavMenu(navSelector, navSelectorActive) {
  toggleActive(navSelector, navSelectorActive);
}

// Main runtime function
function main() {
  fixViewportHeight();

  // >>> Place your code there
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector(`.${navBtnSelector}`)) {
      toggleNavMenu(navSelector, navSelectorActive);
    }
  });
  // <<< Place your code there
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});
