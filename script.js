  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('dropdownNav');
  document.addEventListener('click', function(e) {
    if (btn.contains(e.target)) {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    } else if (!nav.contains(e.target)) {
      nav.style.display = 'none';
    }
  });
