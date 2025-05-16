AOS.init({
    duration: 1000,
    once: true
  });

  document.querySelectorAll('.value-list li').forEach(card => {
    const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (!isTouchDevice) {
      card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
      });
    } else {
      let flipTimeout;
  
      card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) {
          card.classList.remove('flipped');
          clearTimeout(flipTimeout);
        } else {
          card.classList.add('flipped');
  
          flipTimeout = setTimeout(() => {
            card.classList.remove('flipped');
          }, 15000);
        }
      });
    }
  });


  
  console.log(`
 /\\_/\\  
( o.o ) 
 > ^ <       hi.

`);
