
window.addEventListener('DOMContentLoaded', e => {

  let locationBox = document.querySelector('#location');

  // get geolocation through geolocation API
  let location = {
    latitude: 'unknown',
    longitude: 'unknown'
  };

  window.navigator.geolocation.getCurrentPosition(p => {
    location = {
      latitude: p.coords.latitude,
      longitude: p.coords.longitude
    };

    locationBox.value = JSON.stringify(location);
  },
  err => {
    locationBox.value = location;
  }
  );

  const order = localStorage.getItem('order');

  if (!order) {
    console.log('no order');
    return;
  }

  // console.log(`Order is ${order}`);
  const computerOrder = JSON.parse(order); // no type needed whatsoever
  
  // set order in the order input hidden field so it gets sent
  const orderInput = document.querySelector('#computer-order');
  orderInput.value = order;

  const computer = document.querySelector('.computer');
  const title = computer.querySelector('.title');
  const price = computer.querySelector('.price');
  const desc = computer.querySelector('.desc');
  
  title.innerText = computerOrder.title;
  price.innerText = computerOrder.price;
  desc.innerText = computerOrder.desc;

  const img = computer.querySelector('img');
  img.setAttribute('src', `/images/${computerOrder.id}.jpg`);
  img.setAttribute('alt', computerOrder.title);
});