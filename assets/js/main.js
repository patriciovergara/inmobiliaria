function renderPropiedades(propiedades, contenedorId, limite = propiedades.length) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.classList.add("propiedades-grid"); // Aplica grid

  contenedor.innerHTML = "";

  for (let i = 0; i < limite; i++) {
    const p = propiedades[i];
    const template = `
      <div class="propiedad">
        <img src="${p.src}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p><strong>Ubicación:</strong> ${p.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${p.habitaciones}</p>
        <p><strong>Precio:</strong> $${p.costo.toLocaleString()}</p>
        <p class="etiqueta ${p.smoke ? "fumar-true" : "fumar-false"}">
          ${p.smoke ? "✅ Se permite fumar" : "🚭 No se permite fumar"}
        </p>
        <p class="etiqueta ${p.pets ? "mascota-true" : "mascota-false"}">
          ${p.pets ? "🐶 Se aceptan mascotas" : "❌ No se aceptan mascotas"}
        </p>
      </div>
    `;
    contenedor.innerHTML += template;
  }
}