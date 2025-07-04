
// Toggle to hamburger menu

const getNav = document.getElementById('nav-item');
const getMenu = document.getElementById('menuBtn');
const getClose = document.getElementById('closeBtn');

getMenu.addEventListener('click', (e) => {
    e.preventDefault();

    getNav.style.display = 'block';
    getMenu.style.display = 'none';
    getClose.style.display = 'block';

    if (getNav) {
        getClose.addEventListener('click', () => {
            getNav.style.display = 'none';
            getClose.style.display = 'none';
            getMenu.style.display = 'block';
        })
    }
})


// Data for iPhone models and their corresponding Sketchfab embed URLs
const iphoneModelsData = [
    {
        id: 'iphone-one',
        title: 'iPhone 16 Pro White Titanium',  // Assuming a title for this model
        url: 'https://sketchfab.com/models/d4f1ae79c6344e97855b5bd3893b2b12/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark'
    },
    {
        id: 'iphone-two',
        title: 'iPhone 16 Pro Black', // Assuming a title for this model
        url: 'https://sketchfab.com/models/5cb0778041a34f09b409a38c687bb1d4/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark'
    },
    {
        id: 'iphone-three',
        title: 'iPhone 16 Pro Blue', // Assuming a title for this model
        url: 'https://sketchfab.com/models/56f0840754654be3a9e4679c84d4ed64/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark'
    },
    {
        id: 'iphone-four',
        title: 'iPhone 16 Pro Natural Titanium', // Assuming a title for this model
        url: 'https://sketchfab.com/models/f08dd3e6664240ffb2d3da9e5c3a21b3/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark'
    },
    {
        id: 'iphone-five',
        title: 'iPhone 14 Pro Max (Small details)',
        url: 'https://sketchfab.com/models/47a09908453747f288aa23be717f90c6/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark'
    },
];

// Get DOM elements
const iphoneVideoContainer = document.getElementById('iphone-vid');
const iphoneVideoElement = document.getElementById('iphone-video');
const iphoneThumbnails = document.querySelectorAll('.iphone-thumbnail'); // Select all thumbnails

/**
 * Generates the HTML string for the Sketchfab iframe.
 * @param {string} title The title for the iframe.
 * @param {string} url The URL for the Sketchfab embed.
 * @returns {string} The HTML string for the iframe.
 */
function createSketchfabIframeHTML(title, url) {
    return `
        <div class="style-iphone">
            <iframe title="${title}" frameborder="0" allowfullscreen
                mozallowfullscreen="true" webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                execution-while-out-of-viewport execution-while-not-rendered web-share
                src="${url}">
            </iframe>
        </div>
    `;
}

/**
 * Handles the click event on an iPhone thumbnail.
 * @param {Event} event The click event object.
 */
function handleThumbnailClick(event) {
    event.preventDefault();

    // Get the ID of the clicked thumbnail
    const clickedThumbnailId = event.currentTarget.id;

    // Find the corresponding data for the clicked thumbnail
    const selectedModel = iphoneModelsData.find(model => model.id === clickedThumbnailId);

    if (selectedModel) {
        // Hide the video element if it's currently visible
        if (iphoneVideoElement) {
            iphoneVideoElement.style.display = 'none';
        }

        // Replace the content of the video container with the Sketchfab iframe
        iphoneVideoContainer.innerHTML = createSketchfabIframeHTML(selectedModel.title, selectedModel.url);
    }
}

// Attach event listeners to all thumbnail elements
iphoneThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', handleThumbnailClick);
});

// Optional: Add an initial load behavior if you want to show a specific model by default
// For example, to show the first model's 3D view on page load:
/*
document.addEventListener('DOMContentLoaded', () => {
    const initialModel = iphoneModelsData[0];
    if (initialModel) {
        if (iphoneVideoElement) {
            iphoneVideoElement.style.display = 'none';
        }
        iphoneVideoContainer.innerHTML = createSketchfabIframeHTML(initialModel.title, initialModel.url);
    }
});
*/