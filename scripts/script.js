const area = document.getElementById("list_links");

const userName = ["nu7nes"];
const links = ["GitHub", "Linkedin", "Instagram", "Contato"];

function CreateLink(link) {
    if (link === "Linkedin") return `https://${link.toLowerCase()}.com/in/${userName[0]}`;
    if (link === "Contato") return `https://www.brunonunes.site/pages/contato/`;
    return `https://${link.toLowerCase()}.com/${userName[0]}`;
}

links.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add("main__item");
    const a = document.createElement("a");
    const logo = document.createElement("img");
    const linkBtn = document.createElement("button");
    linkBtn.classList.add("main__button--link");
    const shareBtn = document.createElement("button");
    shareBtn.classList.add("main__button--share");
    shareBtn.innerHTML = `<img src="./assets/icons/svg/share_button1.svg" alt="share" />`;

    a.href = CreateLink(link);
    a.innerText = link.toUpperCase();
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    logo.src = `./assets/icons/svg/${link}.svg`;
    logo.alt = link;

    area.appendChild(li);
    linkBtn.appendChild(a);
    a.appendChild(logo);
    li.appendChild(linkBtn);
    li.appendChild(shareBtn);
});
