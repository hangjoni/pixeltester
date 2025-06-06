# pixeltester
This code is for a simple website to be hosted on Github pages and contain Meta pixel script. The purpose is to practice implementing Meta pixel, and then using Events Manager to confirm that the pixel fires correctly.
This page will track Page View event and Add to cart event when the Add to cart button is clicked.

## To host on Github pages
Go to your repository settings and enable GitHub Pages. Choose the branch that you want to (main branch). The site would then be hosted on yourgithubid.github.io/yourreponame

## Cloning this repo
Feel free to clone this repo. Replace the Pixel code in head section of index.html with the pixel ID generated from your own Pixel dataset.

## Creating Pixel in Meta
Pixel belongs to Business Portfolio. Go to your Business Manger > choose a Business Portfolio > Data sources > Datasets & pixels > +Add to create a new pixel.

## Testing events in Events Manager
Go to 'Test events' tab in your Events Manager . From here you can enter the url where your site is hosted, then start interacting with the site. Events should be fired and visible in the 'Test events' tab.
