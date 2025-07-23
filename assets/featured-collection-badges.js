document.addEventListener('DOMContentLoaded', function() {
  // Initialize all featured collection badges sections
  const sections = document.querySelectorAll('.featured-collection-badges');
  
  sections.forEach(function(section) {
    const slider = section.querySelector('.product-slider');
    const tabs = section.querySelectorAll('.tab-link');
    
    if (slider) {
      // Initialize Slick Slider
      $(slider).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: parseInt(slider.dataset.slidesToShow) || 4,
        slidesToScroll: 1,
        autoplay: slider.dataset.autoplay === 'true',
        autoplaySpeed: parseInt(slider.dataset.autoplaySpeed) * 1000 || 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: Math.min(parseInt(slider.dataset.slidesToShow) || 4, 3),
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: Math.min(parseInt(slider.dataset.slidesToShow) || 4, 2),
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    
    // Tab switching functionality
    if (tabs.length > 0) {
      tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class from all tabs
          tabs.forEach(function(t) {
            t.classList.remove('active');
          });
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Here you can add logic to switch between different collections
          // For now, we'll just show the same products
          const tabName = this.dataset.tab;
          console.log('Switched to tab:', tabName);
          
          // You can implement collection switching here
          // For example, load different products based on the tab
        });
      });
    }
  });
  
  // Add hover effects for product cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add click handlers for product images
  const productImages = document.querySelectorAll('.product-image-link');
  productImages.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Product link click is handled by the href
      // This is just for any additional functionality
    });
  });
  
  // Add form submission handlers for add to cart buttons
  const addToCartForms = document.querySelectorAll('.add-to-cart-container form');
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const button = this.querySelector('.button');
      const originalText = button.textContent;
      
      // Show loading state
      button.textContent = 'ADDING...';
      button.disabled = true;
      
      // Reset after a delay (in real implementation, this would be after API response)
      setTimeout(function() {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    });
  });
});

// Utility function to refresh slider when needed
function refreshFeaturedCollectionSlider(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const slider = section.querySelector('.product-slider');
    if (slider && slider.slick) {
      slider.slick('refresh');
    }
  }
}

// Export for potential use in other scripts
window.featuredCollectionBadges = {
  refreshSlider: refreshFeaturedCollectionSlider
}; 