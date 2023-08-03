const prices = {
  italiano: 66,
  casual: 54,
  sport: 58,
};

class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
      <button type="button">Compralo por $${prices[sku]}</button>
    `;
    this.querySelector("button").addEventListener("click", () => {
      alert("Gracias por tu compra");
    });
  }
  disconnectedCallback() {
    this.querySelector("button").removeEventListener("click");
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);
