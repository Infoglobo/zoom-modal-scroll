# Zoom Modal Scroll

This library is free and can be used in different projects where the focus is on zooming in to read images, such as magazines and newspapers, for example.

Feel free to make changes, we love getting PR for improvement.

This project uses the technologies: **SASS**, **CSS**, **Javascript** and **HTML**

## Compiling the SASS

To edit the CSS responsible for the modal, you need to run the commands below.

Install packages
```npm install```

Compile SASS to CSS
```npm run sass```

**SASS** files are in the **src/scss** folder while **CSS** files are in the **src/css** folder.

Edit the **src/scss/zoom-modal.scss** file to modify the css for the zoom modal.
**
How to use

This library was built to be simple, all you need to do is include the css **src/css/zoom-modal.css** and the Javascript **src/script/zoom-modal.js** in your page to have the necessary scripts.

Add the modal HTML to the page after adding the JS and CSS files. We chose not to insert the HTML via script for better transparency and customization.

```html
<!-- MODAL -->
    <div id="zoom-modal" class="zoom-modal">
        <div class="zoom-modal-close">
            <img alt="Close modal" class="zoom-modal-close-img" width="30" height="30" src="icons/close.svg" />
        </div>

        <!--IMG Viewer-->
        <img id="zoom-modal-img" class="zoom-modal-img" width="536" height="937" src="" />

        <div class="zoom-modal-controls">
            <button id="zoom-modal-zoom-in-button">
                <img id="zoom-modal-img-zoom-in"
                    src="icons/zoom-in.svg" />
            </button>

            <button id="zoom-modal-zoom-out-button">
                <img id="zoom-modal-img-zoom-out"
                    src="icons/zoom-out.svg" />
            </button>

        </div>
    </div>
    <!-- MODAL -->
```

Finally now you just need to add the ```image-click-zoom-modal``` class to the images you want to open in the zoom modal.

```html
<img src="img/monet_01.jpeg" class="image-click-zoom-modal" />
```

You can see our complete and working example in the index.html file, available in the root of the repository.

# ENJOY🎈🎈🎈