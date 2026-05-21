import { cars } from '../data/data.js';

function getCarIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get('id'));
}

function renderCar() {
  const carId = getCarIdFromURL();
  const car = cars.find((car) => car.id === carId);

  if (!car) {
    console.error('Car not found');
    return;
  }

  const mainImage = document.getElementById('car-main-image');
  mainImage.src = car.images[0];
  mainImage.alt = `${car.brand} ${car.model} main image`;

  const thumbnailsContainer = document.getElementById('car-thumbnails');
  thumbnailsContainer.innerHTML = '';

  car.images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${car.brand} ${car.model} thumbnail ${index + 1}`;
    img.className = 'thumb-image';

    img.addEventListener('click', () => {
      mainImage.src = img.src;
    });

    thumbnailsContainer.appendChild(img);
  });

  document.getElementById('car-title').childNodes[0].nodeValue = `${car.brand} ${car.model} `;

  document.getElementById('car-price').childNodes[0].nodeValue = `$${car.price.toLocaleString()}`;

  document.getElementById('car-year').textContent = car.year;

  document.getElementById('car-mileage').textContent = `${car.mileage.toLocaleString()} mi`;

  document.getElementById('car-transmission').textContent = car.transmission;

  document.getElementById('car-fuel').textContent = car.fuel;

  document.getElementById('car-body').textContent = car.body;

  document.getElementById('car-description').textContent = car.description;

  document.getElementById('car-power').textContent = car.power;

  document.getElementById('car-range').textContent = car.range;

  document.getElementById('car-interior').textContent = car.interior;

  document.getElementById('car-color').textContent = car.color;

  document.getElementById('car-emission').textContent = car.emission;
}

document.addEventListener('DOMContentLoaded', renderCar);
