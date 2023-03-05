let aleatorio = document.getElementById("aleatorio");

function patriotaAleatorio() {
  let patriotaAleatorio = datos[Math.floor(Math.random() * datos.length)];

  aleatorio.innerHTML += `
            <div class="card cardCarousel mb-3">
               <div  class="row">
                   <div class="col-4">
                    <img src="${patriotaAleatorio.imagen}" class=" img-fluid rounded-start" alt="${patriotaAleatorio.nombre}" />
                   </div>
                   <div class="col-8">
                     <div class="card-body">
                        <h5 class="card-title">Patriota al azar: <span  class="text-info">${patriotaAleatorio.nombre}</span></h5>
                        <p class="card-text">${patriotaAleatorio.profesion} Diputado por el distrito de <span class="text-info"> ${patriotaAleatorio.distrito}.</span> </p>
                        <div class="text-center">
                        <a class="btn btn-primary" href="pages/cv.html?codigo=${patriotaAleatorio.codigo}">Ver CV</a>
                        </div>
                      </div>                    
                  </div>
                </div>
              </div>
    `;
}

