import { propiedades_venta } from "./data/propiedades_venta.js"

const dashboard = document.querySelector ("#propiedades_venta")

const pintarVenta = () => {
    const cards = propiedades_venta.map((propiedades) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedades.src}" class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedades.nombre}</h5>
                        <p class="card-text">${propiedades.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedades.ubicacion}</p>
                        <p>
                        <i class="fas fa-bed"></i> ${propiedades.habitaciones} |
                        <i class="fas fa-bath"></i> ${propiedades.banios}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                        ${
                            propiedades.smoke === true
                            ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                            : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                        }
                        ${
                            propiedades.pets === true
                            ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                            : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                        }
                    </div>
                </div>
            </div>
        `
    })

    dashboard.innerHTML = cards.join('')
}

pintarVenta()


