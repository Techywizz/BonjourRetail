# Recently Viewed Products Collection Section

## Overview

The Recently Viewed Products section displays a slider of products that customers have recently viewed on the collection page. This section appears above the recommended products section and helps customers easily find and revisit products they've shown interest in.

## Features

- **Dynamic Content**: Only shows when customers have recently viewed products
- **Slider Functionality**: Responsive slider with navigation arrows and counter
- **Product Card Support**: Works with both default and modern product card designs
- **Local Storage**: Uses browser localStorage to track recently viewed products
- **Responsive Design**: Adapts to different screen sizes with configurable columns
- **Auto-hide**: Section automatically hides when no recently viewed products are available

## How It Works

1. **Product Tracking**: When customers visit product pages, product information is stored in localStorage
2. **Data Retrieval**: The section reads from localStorage to get recently viewed products
3. **Dynamic Rendering**: Products are rendered as cards in a slider format
4. **Smart Display**: Section only appears when there are valid recently viewed products

## Section Settings

### Basic Settings
- **Heading**: Customizable section title (default: "Recently Viewed Products")
- **Heading Size**: Choose between small (h2) or large (h1)
- **Products to Show**: Number of products to display (4-12, default: 8)
- **Columns Desktop**: Number of columns on desktop (2-5, default: 4)
- **Columns Mobile**: Number of columns on mobile (1-3, default: 2)

### Slider Settings
- **Enable Slider**: Toggle slider functionality
- **Show Arrows**: Display navigation arrows
- **Show Dots**: Display navigation dots
- **Autoplay**: Enable automatic sliding
- **Autoplay Speed**: Speed of autoplay in milliseconds (2000-8000, default: 3000)

### Appearance Settings
- **Image Ratio**: Choose between adapt, portrait, or square
- **Color Scheme**: Select from available color schemes
- **Padding**: Configure top and bottom padding

## Integration

### Collection Templates
The section is automatically added to collection templates in the following order:
1. Banner
2. Product Grid
3. Custom Liquid (collection description)
4. **Recently Viewed Products** ← New section
5. Recommended Products

### Product Card Compatibility
- Supports both default and modern product card designs
- Automatically detects the current product card design setting
- Renders appropriate card structure based on theme settings

## Technical Details

### JavaScript Class
The section uses a custom `RecentlyViewedCollection` class that:
- Extends HTMLElement for proper web component behavior
- Handles localStorage data retrieval and validation
- Manages slider functionality and navigation
- Provides fallback slider behavior if needed

### CSS Styling
- Responsive grid layout
- Smooth animations and transitions
- Proper spacing and alignment
- Mobile-optimized touch interactions

### Data Structure
Recently viewed products are stored in localStorage with the following structure:
```javascript
[
  {
    productTitle: "Product Name",
    productImg: "image_url",
    productPrice: "$19.99",
    productUrl: "/products/product-handle",
    productImageAltText: "Alt text"
  }
]
```

## Browser Compatibility

- Modern browsers with localStorage support
- Responsive design for mobile and desktop
- Graceful degradation for older browsers

## Customization

### Adding to Other Templates
To add this section to other templates, include it in the template's JSON structure:

```json
{
  "type": "recently-viewed-collection",
  "settings": {
    "heading": "Recently Viewed Products",
    "products_to_show": 8,
    "columns_desktop": 4,
    "columns_mobile": 2
  }
}
```

### Styling Customization
The section uses the `section-recently-viewed-collection.css` file for styling. Custom styles can be added to this file or through theme customizer settings.

## Troubleshooting

### Section Not Appearing
1. Check if customers have visited product pages recently
2. Verify localStorage is enabled in the browser
3. Check browser console for JavaScript errors

### Products Not Loading
1. Ensure product data is properly stored in localStorage
2. Check for valid product information (title, image, URL)
3. Verify the section settings are configured correctly

### Slider Not Working
1. Check if slider is enabled in section settings
2. Verify there are enough products to require sliding
3. Check for JavaScript conflicts with other slider components

## Future Enhancements

Potential improvements could include:
- Server-side tracking for cross-device functionality
- Analytics integration for tracking engagement
- Custom product card layouts
- Advanced filtering and sorting options
- Integration with wishlist functionality 