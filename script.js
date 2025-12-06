let quotes = [];
document.addEventListener("DOMContentLoaded", () => {
  const getBtn = document.getElementById("add");
  const QuotesList = document.getElementById("quotes");
  getBtn.addEventListener("click", () => {
    fatch();
  });
  async function fatch() {
    url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
    response = await fetch(url);
    data = await response.json();
    console.log(data);
    display(data);
  }
  function display(data) {
    quotes.push({ id: quotes.length, text: data["data"]["content"] });
    list = document.createElement("li");
    list.id = quotes.length.toString;
    content = document.createElement("strong");
    content.textContent = data["data"]["content"];
    del = document.createElement("button");
    del.classList.add("del");
    del.id = quotes.length;
    del.textContent = "Delete";
    list.appendChild(content);
    list.appendChild(del);
    QuotesList.appendChild(list);
    del.addEventListener("click", () => {
      l = document.getElementsByid(del.id.toString);
      QuotesList.removeChild(l);
    });
  }
});
