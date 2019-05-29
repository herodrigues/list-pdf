const main = document.querySelector(".pdfs");

for (let i = 1; i < 7; i++) {
  fetch(`https://github.com/herodrigues/open-pdf/raw/master/pdfs/00${i}.pdf`, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }).then(response => response.json())
    .then(response => {
      const object = document.querySelector("#pdf-file");
      const link = document.createElement("a");
      const div = document.createElement("div");

      object.style.display = "block";
      a.target="_blank";
      a.appendChild(object);
      div.appendChild(a);

      main.appendChild(div);
    });
}
