(function() {
  const element = document.querySelector(".catalog_recos");
  const url = element.getAttribute("data-fragment");

  window
    .fetch(url)
    .then(res => res.text())
    .then(html => {
      element.innerHTML = html;
    });
})();
