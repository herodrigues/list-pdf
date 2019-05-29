const main = document.querySelector(".pdfs");

// troca pelo teu nome de usuário, repositório e a pasta onde os PDFs estão
const owner = "herodrigues"
const repo = "open-pdf"
const path = "pdfs"

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
  .then(response => response.json()).then(response => {
    response.map(item => {
      var loadingTask = pdfjsLib.getDocument(item.download_url);
      loadingTask.promise.then((pdf) => {
        const main = document.querySelector("main");
        const div = document.querySelector("#pdf-item");
        const cln = div.cloneNode(true);

        cln.style.display = "block";
        const link = cln.querySelector("a");
        const span = cln.querySelector("span");

        link.onclick = () => window.open(`https://mozilla.github.io/pdf.js/web/viewer.html?file=${item.download_url}`);
        link.title = `Open this PDF in a new tab`;
        span.textContent = item.name;
        main.querySelector("h2").textContent = "";
        main.appendChild(cln);
      });
    })
  });
