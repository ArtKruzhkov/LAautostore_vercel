import { cars } from '../data/data.js';

function renderCatalog(list) {
  const grid = document.getElementById('catalog-grid');
  const carsCount = document.getElementById('cars-count');
  const vehicleWord = document.getElementById('vehicle-word');

  if (!grid) return;

  grid.innerHTML = '';

  if (carsCount) {
    carsCount.textContent = list.length;
  }

  if (vehicleWord) {
    vehicleWord.textContent = list.length === 1 ? 'vehicle' : 'vehicles';
  }

  if (!list.length) {
    grid.innerHTML = `
      <div class="col-span-full text-center text-gray-400 py-20">
        No vehicles found
      </div>
    `;
    if (carsCount) carsCount.textContent = 0;
    return;
  }

  list.forEach((car) => {
    const card = document.createElement('a');
    card.href = `item.html?id=${car.id}`;
    card.className = 'block catalog-item';

    card.innerHTML = `
      <div class="car-card bg-dark-secondary overflow-hidden group cursor-pointer">
        
        <div class="car-image relative overflow-hidden aspect-[4/3]">
          <img src="${car.images[0]}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover" />
        </div>

        <div class="p-4 border border-gray-800 border-t-0">

          <div class="flex justify-between items-start mb-2">

            <div>
              <h4 class="text-sm font-medium text-white">
                ${car.brand} ${car.model}
              </h4>

              <p class="text-xs text-gray-500">
                ${car.trim}
              </p>
            </div>

            <span class="text-primary font-montserrat font-bold">
              $${car.price.toLocaleString()}
              <span class="text-xs text-gray-400">/ month</span>
            </span>

          </div>

          <div class="flex items-center gap-3 text-xs text-gray-400 mt-3">
            <span>${car.year}</span>

            <span class="w-1 h-1 bg-gray-600 rounded-full"></span>

            <span>${car.mileage.toLocaleString()} mi</span>
          </div>

        </div>

      </div>
    `;
    grid.appendChild(card);
  });
}

function initCatalogPagination() {
  const items = document.querySelectorAll('.catalog-item');
  const pagination = document.getElementById('pagination');

  if (!pagination) return;

  if (!items.length) {
    pagination.innerHTML = '';
    return;
  }

  const perPage = 9;
  const pages = Math.ceil(items.length / perPage);
  let currentPage = 1;

  function showPage(page, scroll = true) {
    currentPage = page;

    items.forEach((item, index) => {
      item.style.display =
        index >= (page - 1) * perPage && index < page * perPage ? 'block' : 'none';
    });

    renderPagination();

    if (!scroll) return;

    const catalog = document.getElementById('catalog-content_section');

    if (catalog) {
      const y = catalog.getBoundingClientRect().top + window.scrollY - 130;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  function renderPagination() {
    pagination.innerHTML = '';

    for (let i = 1; i <= pages; i++) {
      const btn = document.createElement('button');

      btn.innerText = i;

      btn.className =
        'px-4 py-2 text-xs text-gray-400 border border-gray-300 hover:bg-red-500 hover:text-white transition';

      if (i === currentPage) {
        btn.classList.remove('text-gray-400');
        btn.classList.remove('border-gray-300');
        btn.classList.add('bg-red-500', 'text-white', 'border-primary');
      }

      btn.addEventListener('click', () => showPage(i));

      pagination.appendChild(btn);
    }
  }

  showPage(1, false);
}

function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    brand: params.get('brand'),
    model: params.get('model'),
    year: params.get('year'),
  };
}

function filterCars() {
  const { brand, model, year } = getSearchParams();

  return cars.filter((car) => {
    if (brand && car.brand !== brand) return false;
    if (model && car.model !== model) return false;
    if (year && String(car.year) !== year) return false;

    return true;
  });
}

function sortCars(list, sortValue) {
  const sortedCars = [...list];

  switch (sortValue) {
    case 'newest':
      sortedCars.sort((a, b) => b.year - a.year);
      break;

    case 'price-desc':
      sortedCars.sort((a, b) => b.price - a.price);
      break;

    case 'price-asc':
      sortedCars.sort((a, b) => a.price - b.price);
      break;

    default:
      break;
  }

  return sortedCars;
}

function updateCatalog() {
  const sortSelect = document.getElementById('sort-select');
  const filteredCars = filterCars();
  const sortedCars = sortCars(filteredCars, sortSelect?.value || '');

  renderCatalog(sortedCars);
  initCatalogPagination();
}

document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');

  updateCatalog();

  if (sortSelect) {
    sortSelect.addEventListener('change', updateCatalog);
  }
});
