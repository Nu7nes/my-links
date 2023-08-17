import CreateLink, { links } from "./CreateLink.js";

const area = document.getElementById('links');

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a')
    const logo = document.createElement('img');

    a.href = CreateLink(link);
    a.innerText = link.toUpperCase();
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    logo.src = `./assets/icons/svg/${link}.svg`;
    logo.alt = link;

    area.appendChild(li);
    li.appendChild(a)
    li.appendChild(logo);
})
