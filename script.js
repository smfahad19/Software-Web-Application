document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href');
      window.location.href = target;
    });
  });
  