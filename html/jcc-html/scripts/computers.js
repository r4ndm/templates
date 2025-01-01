
window.addEventListener("DOMContentLoaded", e => {
    const orderButtons = document.querySelectorAll('button[data-order]');
    orderButtons.forEach(b => {
      b.addEventListener('click', e => {
        // const button = e.currentTarget; // not needed since we're using b directly - closure
        const container = b.parentNode;

        // Untyped order object
        const order = {
          id: b.getAttribute('data-order'),
          title: container.querySelector('.title').innerText,
          price: container.querySelector('.price').innerText,
          desc: container.querySelector('.desc').innerText
        };

        // console.log(`Ordering ${JSON.stringify(order)}`);

        localStorage.setItem('order', JSON.stringify(order));
        const url = window.location.href.replace('computers.html', 'order.html');
        window.location.href = url;
      });
    });
  })