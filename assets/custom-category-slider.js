document.addEventListener('DOMContentLoaded', function() {
  const sliderSections = document.querySelectorAll('.custom-category-slider');

  sliderSections.forEach(sliderSection => {
    const sectionId = sliderSection.dataset.sectionId;
    const sliderSettings = {
      dots: sliderSection.querySelector('.product-slider').dataset.dots === 'true',
      arrows: sliderSection.querySelector('.product-slider').dataset.arrows === 'true',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]
    };

    function initializeSlick(selector) {
      const slider = $(selector);
      if (slider.length && !slider.hasClass('slick-initialized')) {
        slider.slick(sliderSettings);
      }
    }

    // Initialize the first active slider
    initializeSlick(`.custom-category-slider[data-section-id="${sectionId}"] .slider-content.active .product-slider`);

    sliderSection.querySelectorAll('.tab-link').forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.dataset.tabId;

        // De-init sliders in inactive tabs
        sliderSection.querySelectorAll('.slider-content:not(.active) .product-slider.slick-initialized').forEach(slider => {
            $(slider).slick('unslick');
        });

        sliderSection.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        sliderSection.querySelectorAll('.slider-content').forEach(content => {
          content.classList.remove('active');
          if (content.dataset.contentId === tabId) {
            content.classList.add('active');
          }
        });

        const activeSliderSelector = `.custom-category-slider[data-section-id="${sectionId}"] .slider-content.active .product-slider`;
        initializeSlick(activeSliderSelector);
      });
    });
  });

  // Re-initialize sliders when the theme editor is updated
  if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', function(event) {
      if (event.target.querySelector('.custom-category-slider')) {
        // Re-run the logic for the loaded section
      }
    });
    document.addEventListener('shopify:section:reorder', function(event) {
       // Re-run logic if needed
    });
  }
}); 