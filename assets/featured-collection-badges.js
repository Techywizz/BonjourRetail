document.addEventListener('DOMContentLoaded', function() {
  // Initialize Slick Slider for each tab
  const productSliders = document.querySelectorAll('.product-slider');
  productSliders.forEach(function(slider) {
    const slidesToShow = parseInt(slider.dataset.slidesToShow) || 4;
    const autoplay = slider.dataset.autoplay === 'true';
    const autoplaySpeed = parseInt(slider.dataset.autoplaySpeed) || 3000;

    $(slider).slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: autoplay,
      autoplaySpeed: autoplaySpeed,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(slidesToShow, 3),
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Math.min(slidesToShow, 2),
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
  });
  
  // Tab switching functionality
  const tabs = document.querySelectorAll('.tab-link');
  const productSliderContainers = document.querySelectorAll('.product-slider-container');
  const viewAllButtonGroups = document.querySelectorAll('.view-all-button-group');
  
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
        
        // Handle Product Slider visibility
        const tabId = this.dataset.tab;
        productSliderContainers.forEach(function(container) {
          container.classList.remove('active');
          if (container.dataset.tab === tabId) {
            container.classList.add('active');
            container.style.display = 'block';
            
            // Refresh the slider for the newly active tab
            const slider = container.querySelector('.product-slider');
            if (slider && slider.slick) {
              slider.slick('refresh');
            }
          } else {
            container.style.display = 'none';
          }
        });
        
        // Handle View All button visibility
        viewAllButtonGroups.forEach(function(buttonGroup) {
          buttonGroup.classList.remove('active');
          if (buttonGroup.dataset.tab === tabId) {
            buttonGroup.classList.add('active');
            buttonGroup.style.display = 'block';
          } else {
            buttonGroup.style.display = 'none';
          }
        });
        
        console.log('Switched to tab:', tabId);
      });
    });
  }
  
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
      // Form submission is handled by Shopify
      // This is just for any additional functionality
    });
  });
});

// Utility function to refresh slider when needed
function refreshFeaturedCollectionSlider(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const sliders = section.querySelectorAll('.product-slider');
    sliders.forEach(function(slider) {
      if (slider.slick) {
        slider.slick('refresh');
      }
    });
  }
}

// Export for potential use in other scripts
window.featuredCollectionBadges = {
  refreshSlider: refreshFeaturedCollectionSlider
}; 