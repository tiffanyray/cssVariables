const inputs = document.querySelectorAll('.controls input');

function onChange() {
  const suffix = event.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', onChange));
inputs.forEach(input => input.addEventListener('mousemove', onChange));

