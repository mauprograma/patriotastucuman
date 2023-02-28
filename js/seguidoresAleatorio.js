let seguidoresParrafoContenedor = document.getElementById(
  "seguidoresParrafoContenedor"
);

const consultarAPI = async () => {
  let spinner = `<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>`;
  document.getElementById("seguidoresParrafoContenedor").innerHTML = spinner;
  try {
    const respuesta = await fetch("https://randomuser.me/api/");
    const dato = await respuesta.json();
    document.getElementById("seguidoresParrafoContenedor").innerHTML = `
          <div class="text-center"> 
          <p>
          <span>${dato.results[0].name.first}</span>
          <span>${dato.results[0].name.last} </span>, de la ciudad de
          <span>${dato.results[0].location.city} </span>.
          </p>
          <h5>${dato.results[0].location.country} </h5>
          
            <div>
            <img id="seguidorImagen" src="${dato.results[0].picture.medium}" alt="seguidor" class="border border-1 rounded border-light" /> </div>
            
          </div> `;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡No se pudieron cargar los seguidores!",
      footer: '<p class="text-info">Recarga la página y prueba nuevamente<p>',
    });
  }
};

consultarAPI();
