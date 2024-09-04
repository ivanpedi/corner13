document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Swiper
  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Función para mostrar u ocultar diapositivas según el filtro seleccionado
  function filterSwiper(filterClass) {
    swiper.slides.forEach(slide => {
      if (filterClass === 'all' || slide.classList.contains(filterClass)) {
        slide.style.display = 'block'; // Mostrar
      } else {
        slide.style.display = 'none'; // Ocultar
      }
    });
    swiper.update(); // Actualiza Swiper después de los cambios
  }

  // Función para manejar la clase activa en los botones de filtro
  function setActiveButton(activeId) {
    // Quitar la clase 'active' de todos los botones
    document.querySelectorAll('#menu_desplegable .menu-item a').forEach(button => {
      button.classList.remove('active');
    });
    // Añadir la clase 'active' al botón seleccionado
    document.getElementById(activeId).classList.add('active');
  }

  // Event listeners para los filtros
  document.getElementById('filter-all').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    filterSwiper('all');
    setActiveButton('filter-all'); // Añade la clase 'active' al botón seleccionado
  });

  document.getElementById('filter-nino').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    filterSwiper('nino');
    setActiveButton('filter-nino'); // Añade la clase 'active' al botón seleccionado
  });

  document.getElementById('filter-mujer').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    filterSwiper('mujer');
    setActiveButton('filter-mujer'); // Añade la clase 'active' al botón seleccionado
  });

  document.getElementById('filter-hombre').addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace
    filterSwiper('hombre');
    setActiveButton('filter-hombre'); // Añade la clase 'active' al botón seleccionado
  });
});
