document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("grid-cards");

  fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(data => {
      const heroes = data.slice(0, 20);
      heroes.forEach(hero => {
        const card = document.createElement("div");
        const price = Math.floor(Math.random() * (500 - 5 + 1)) + 5;
        card.classList.add("card");
        card.innerHTML = `
          <img src="${hero.images.lg}" alt="${hero.name}">
          <h2>${hero.name}</h2>
          <p>Precio: ${price}€</p>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error al cargar los superhéroes:", err);
      contenedor.innerHTML = "<p>No se pudieron cargar los datos.</p>";
    });
});
