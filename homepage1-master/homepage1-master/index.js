


document.querySelectorAll('.position-relative').forEach(container => {
    const video = container.querySelector('.video');
    
    container.addEventListener('mouseenter', () => {
      video.play(); // Play the video on hover
    });
  
    container.addEventListener('mouseleave', () => {
      video.pause(); // Pause the video when not hovering
      video.currentTime = 0; // Reset video to start
    });
  });



  setTimeout(() => {
    const topTextElement = document.getElementById('toptext');
    topTextElement.textContent = "20% OFF on orders over ₹10,000 | Code: DIWALI10";
  }, 2000); 