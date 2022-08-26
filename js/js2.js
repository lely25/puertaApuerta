
/* DESTINOS */
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnSierra = document.querySelector('.sierra');
const btnCosta = document.querySelector('.costa');
const btnOriente = document.querySelector('.oriente');
const contenedorDestinos = document.querySelector('.destinos');

document.addEventListener('DOMContentLoaded',()=>{
    destinos();
});

const observer = new IntersectionObserver ((entries, observer) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    });
});


imagenes.forEach(imagen => {
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});

const destinos = () =>{
    let destinosArreglo = [];
    const destinos = document.querySelectorAll('.destino');
    
    destinos.forEach(destino => destinosArreglo = [...destinosArreglo,destino]); 
        
    const rsierra = destinosArreglo.filter(sierra => sierra.getAttribute('data-destino') === 'sierra');
    const rcosta = destinosArreglo.filter(costa => costa.getAttribute('data-destino') === 'costa');
    const roriente = destinosArreglo.filter(oriente => oriente.getAttribute('data-destino') === 'oriente');
    mostrarDestinos(rsierra, rcosta, roriente, destinosArreglo);
}

const mostrarDestinos = (rsierra, rcosta, roriente,todos) => {
    btnSierra.addEventListener('click', ()=>{
        limpiar(contenedorDestinos);
        rsierra.forEach(sierra=> contenedorDestinos.appendChild(sierra));
    });

    btnCosta.addEventListener('click', ()=>{
        limpiar(contenedorDestinos);
        rcosta.forEach(costa=> contenedorDestinos.appendChild(costa));
    });

    btnOriente.addEventListener('click', ()=>{
        limpiar(contenedorDestinos);
        roriente.forEach(oriente=> contenedorDestinos.appendChild(oriente));
    });

    btnTodos.addEventListener('click', ()=>{
        limpiar(contenedorDestinos);
        todos.forEach(todo=> contenedorDestinos.appendChild(todo));
    });
}

const limpiar = (contenedor) =>{
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}


