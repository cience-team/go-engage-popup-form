# Go Engage Popup Form Integration

This project allows you to easily integrate a popup form into your Go Engage-powered website. The popup form displays on the page, and users can interact with it to submit their information. The provided `script.js` and `style.css` files handle the popup's functionality and appearance.

## How to Use

To use this project and integrate the Go Engage popup form on your website, follow these steps:

### Step 1: Include the Styles

Add the following code to the `<head>` section of your HTML document:

```html
<!-- Popup Form Styles -->
<link rel="stylesheet" type="text/css" href="https://cience-team.github.io/go-engage-popup-form/dist/styles.min.css">
<style>
    /* Custom styles for the Go Engage form button */
    .mauticform-button {
        background: #3076FF !important;
        border: 2px solid #3076FF !important;
    }
    .mauticform-button:hover {
        background: transparent !important;
    }
</style>
<!-- -->
```

### Step 2: Add the Popup Container

Add the following HTML code to your webpage:

```html
<div id="popupContainer">
    <span class="closeButton" onclick="closePopup()" title="Close">×</span>
    {form=1}
</div>
```

The `{form=1}` will be replaced with the actual Go Engage form.

> **Note:** Replace the number '1' in {form=1} with the actual ID of your Go Engage form. You can find the form ID on the Forms page in Go Engage. 

### Step 3: Include the Scripts

Add the following code at the end of the `<body>` section of your HTML document, just before the closing `</body>` tag:

```html
<!-- Popup Form Scripts -->
<script src="https://cience-team.github.io/go-engage-popup-form/dist/script.min.js"></script>
```

### Step 4: Customize (Optional)

You can further customize the appearance and behavior of the popup form by modifying the `style.css` and `script.js` files as needed. Remember to re-minify the files using Gulp after making changes.

```bash
# Install the required dependencies
npm install

# Run the Gulp task to minify the files
gulp
```

## Conclusion

Congratulations! You have successfully integrated the Go Engage popup form into your website. Visitors will now see the popup form when they click on elements with the class `.cta`. The form submission data will be sent to Go Engage for further processing.

Feel free to explore and expand upon this project to suit your specific needs. If you encounter any issues or have suggestions for improvements, please don't hesitate to raise them on this project's GitHub repository.
