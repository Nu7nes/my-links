const area = document.getElementById("list_links");

const userName = ["nu7nes"];
const links = ["GitHub", "Linkedin", "Instagram", "Contato"];

function CreateLink(link) {
    if (link === "Linkedin")
        return `https://${link.toLowerCase()}.com/in/${userName[0]}`;
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
    shareBtn.dataset.link = CreateLink(link);
    shareBtn.setAttribute("aria-label", "compatilhar");
    shareBtn.setAttribute("onclick", "shareLink(this)");
    shareBtn.title = "Compartilhe este link";
    shareBtn.innerHTML = `<img src="./assets/icons/svg/share_button1.svg" alt="share" />`;

    a.href = CreateLink(link);
    a.innerText = link.toUpperCase();
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    logo.src = `./assets/icons/svg/${link.toLocaleLowerCase()}.svg`;
    logo.alt = link;

    area.appendChild(li);
    linkBtn.appendChild(a);
    a.appendChild(logo);
    li.appendChild(linkBtn);
    li.appendChild(shareBtn);
});

function shareLink(el) {
    if (navigator.share) {
        if (!window.isSharing) {
            window.isSharing = true;

            navigator
                .share({
                    title: "Desenvolvedor Web",
                    text: "Desenvolvedor Web | Nunes",
                    url: el.dataset.link,
                })
                .then(() => {
                    window.isSharing = false;
                })
                .catch((error) => {
                    console.error("Erro ao compartilhar:", error);
                    window.isSharing = false;
                });
        } else {
            console.log("Já há uma operação de compartilhamento em andamento.");
        }
    } else {
        fallbackShare(el.dataset.link);
    }
}

function fallbackShare(el) {
    copyTextToClipboard(el);
    alert(
        "O compatilhamento direto não é suportada neste navegador.\nPor isso o link foi copiado para a área de transferência."
    );
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = 0;
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
    } catch (err) {
        alert("Não foi possível compartilhar ou copiar o link.");
    }

    document.body.removeChild(textArea);
}
