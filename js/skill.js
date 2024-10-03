function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-percentage');

  skillBars.forEach(bar => {
    if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage;

      let count = 0;
      const percentageText = bar.querySelector('.percentage-text');
      const interval = setInterval(() => {
        if (count < parseInt(percentage, 10)) {
          count++;
          percentageText.textContent = `${count}%`;
        } else {
          clearInterval(interval);
        }
      }, 15);
    }
  });
}

// Trigger animation when scrolling or loading the page
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);