// Pagina INDEX o INICIO . Noticias desde archivo externo 

const API_KEY = '8f066a0f1673d3958ac7cbd430012db4';  
const url = `https://gnews.io/api/v4/search?q=moda+deportiva&lang=es&token=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data);
        if (data.articles) {
            showNews(data.articles);
        } else {
            console.error('No se encontraron noticias.');
        }
    })
    .catch(error => console.error('Error al cargar las noticias:', error));

function showNews(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    // Limitamos a 4 noticias
    const limitedNews = newsData.slice(0, 4);  

    if (Array.isArray(limitedNews) && limitedNews.length > 0) {
        limitedNews.forEach(news => {
            const newsElement = document.createElement('div');
            newsElement.className = 'news-card'; 
            newsElement.innerHTML = `
                <img src="${news.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${news.title}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description || 'No hay descripción disponible.'}</p>
                    <a href="${news.url || '#'}" class="btn btn-primary">Leer más</a>
                </div>
            `;
            newsContainer.appendChild(newsElement);
        });
    } else {
        newsContainer.innerHTML = '<p>No se encontraron noticias.</p>';
    }
}

// FOOTER . Funciones de JS para abrir desde google maps las tres tiendas.

// Función para abrir el mapa de la tienda en Cadiz
document.getElementById('openMapCadiz').addEventListener('click', function(event) {
    event.preventDefault(); 

    var lat = 36.5246058328783;
    var lng = -6.287045745169399;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// Función para abrir el mapa de la tienda en Jerez
document.getElementById('openMapJerez').addEventListener('click', function(event) {
    event.preventDefault(); 

    var lat = 36.68628953667412;
    var lng = -6.126082766940414;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// Función para abrir el mapa de la tienda en San Fernando
document.getElementById('openMapSanFdo').addEventListener('click', function(event) {
    event.preventDefault(); 

    var lat = 36.46795102831662;
    var lng = -6.194233233915417;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// MODAL del FOOTER. Funciones para aviso y politica 

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de los modales y los botones
    var modalAviso = document.getElementById("modal");
    var modalPolitica = document.getElementById("modal_politica");

    var openModalAvisoBtn = document.getElementById("openModal");
    var closeModalAvisoBtn = document.getElementById("closeModal");
    var closeSpanAviso = modalAviso.querySelector(".close");

    var openModalPoliticaBtn = document.getElementById("openModal_politica");
    var closeModalPoliticaBtn = document.getElementById("closeModal_politica");
    var closeSpanPolitica = modalPolitica.querySelector(".close");

    // Funciones para abrir los modales
    openModalAvisoBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        modalAviso.style.display = "block";
    });

    openModalPoliticaBtn.addEventListener("click", function (event) {
        event.preventDefault(); // 
        modalPolitica.style.display = "block";
    });

    // Funciones para cerrar los modales con los botones 'Cerrar'
    closeModalAvisoBtn.addEventListener("click", function () {
        modalAviso.style.display = "none";
    });

    closeModalPoliticaBtn.addEventListener("click", function () {
        modalPolitica.style.display = "none";
    });

    // Funciones para cerrar los modales con el botón 'x'
    closeSpanAviso.addEventListener("click", function () {
        modalAviso.style.display = "none";
    });

    closeSpanPolitica.addEventListener("click", function () {
        modalPolitica.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
        if (event.target == modalAviso) {
            modalAviso.style.display = "none";
        }
        if (event.target == modalPolitica) {
            modalPolitica.style.display = "none";
        }
    });
});