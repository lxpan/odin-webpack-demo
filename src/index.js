import _ from 'lodash';
import myName from './myName';
import './style.css';

function component() {
    const element = document.createElement('div');

    // use your function!
    element.textContent = myName('Luoxi');
    element.classList.add('hello');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
