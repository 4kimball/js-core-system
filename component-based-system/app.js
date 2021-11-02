const $app = document.querySelector("#app");

let state = {
  items: ["item1", "item2", "item3", "item4"],
};

const render = () => {
  const { items } = state;
  $app.innerHTML = `
  <button id="append">추가</button>
    <ul>
    ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    
  `;
  document.querySelector("#append").addEventListener("click", () => {
    setState({ items: [...items, `itesm${items.length + 1}`] });
  });
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};

window.onload = () => {
  render();
};
