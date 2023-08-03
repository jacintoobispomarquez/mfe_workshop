// in a real application this data would be fetched from Team recommendations's API
const recos = {
  italiano: ["casual", "sport"],
  casual: ["italiano", "sport"],
  sport: ["italiano", "casual"]
};

class recommendationsPanel extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
      <div class="recommendations_fragment">
        <h2 class="recommendations_headline">Recommendations</h2>
        <div class="recommendations_recommendations">
          ${recos[sku]
            .map(
              reco => `<a href="http://localhost:3001/product/zapato_${reco}">
                         <img src="http://localhost:3001/img/zapato_${reco}.png" />
                       </a>`
            )
            .join("\n")}
        </div>
      </div>
    `;
  }
}
window.customElements.define(
  "recommendations-panel",
  recommendationsPanel
);
