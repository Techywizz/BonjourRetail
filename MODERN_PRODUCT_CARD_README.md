# Modern Product Card Feature

This theme now includes a modern product card design that matches the custom category slider design and can be toggled on/off through theme settings.

## Features

The modern product card design includes:

- **Clean product image display** with hover effects
- **Brand name** displayed in uppercase with light grey color
- **Product title** with customizable font and size
- **Advanced rating system** with star or number display, review count, and verified badge
- **Price display** with sale price support
- **Add to Cart button** with customizable colors
- **Smart badge system** for "NEW PRODUCTS", "BEST SELLERS", and discount percentages
- **Fully customizable** colors, spacing, and typography
- **Responsive design** for all screen sizes

## How to Enable/Disable

1. Go to your Shopify admin
2. Navigate to **Online Store > Themes**
3. Click **Customize** on your active theme
4. Go to **Theme Settings**
5. Find the **Cards** section
6. Look for **"Product Card Design"** setting
7. Choose between:
   - **Default Product Card** - Original theme design
   - **Modern Product Card** - New design matching the custom category slider

## Customization Options

The modern product card design includes extensive customization options in the **Cards** section of theme settings:

### Badge Settings
- **Top Badge Metafield**: Configure which metafield to use for badges
- **Badge Colors**: Customize background and text colors for top and discount badges
- **Badge Spacing**: Adjust padding and margins for badge positioning
- **Badge Font Size**: Control the size of badge text

### Button Settings
- **Button Background Color**: Customize the add to cart button background
- **Button Text Color**: Customize the add to cart button text color

### Typography Settings
- **Product Title Font**: Choose from available theme fonts
- **Product Title Font Size**: Adjust from 12px to 24px

### Rating Display Settings
- **Rating Display Type**: Choose between "Star Rating" or "Number Rating"
- **Show Review Count**: Toggle review count display
- **Show Verified Badge**: Toggle verified badge display

## Where It Applies

The modern product card design will be applied to:

- Collection pages (`main-collection-product-grid`)
- Featured collection sections (`featured-collection`)
- Collection tabs (`Collection_tab`, `collection2_tab`)
- Custom category sliders (`custom-category-slider`)
- Search results (`main-search`)
- Collage sections (`collage`)

## Badge System

The modern cards support badges in the following order:

1. **First product in first tab**: "NEW PRODUCTS" badge
2. **Second product in first tab**: "BEST SELLERS" badge
3. **Other products**: Uses metafield `custom.special_tags` if available
4. **Discount badges**: Automatically shows percentage off for products on sale

## Rating System

The modern cards support multiple rating display options:

- **Star Rating**: Shows filled stars based on product rating
- **Number Rating**: Shows numerical rating with star icon
- **Review Count**: Displays total number of reviews
- **Verified Badge**: Shows blue checkmark for verified reviews

## Customization

The design uses CSS custom properties and can be further customized by modifying:

- `assets/modern-product-card.css` - Main styles
- `snippets/card-product-modern.liquid` - HTML structure

## Technical Details

- **CSS File**: `assets/modern-product-card.css`
- **Snippet**: `snippets/card-product-modern.liquid`
- **Setting**: `settings.product_card_design`
- **Default Value**: "modern" (as set in settings_data.json)

## Browser Support

The modern product card design is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

The modern design is optimized for performance with:
- Efficient CSS animations
- Lazy loading support
- Minimal DOM manipulation
- Responsive images

## Troubleshooting

If the modern cards don't appear:

1. Check that the setting is enabled in theme settings
2. Clear your browser cache
3. Verify that the CSS file is loading
4. Check browser console for any JavaScript errors

## Support

For issues or questions about the modern product card feature, please refer to the theme documentation or contact support. 