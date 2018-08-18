# Font Notes

I did not have the `Glober` font, and couldn't find any freeware versions -- so I opted to do everything with Roboto, matching as very best as I could, despite not having the same font as in the mockup. I also set sans-serif as a 3rd fall back option in the event that Glober is not found on the system and if Roboto fails to load via Google Fonts. Because I was not able to test with the Glober font locally, there might need to be a few tweaks for a pixel-perfect.

## Cool Features

1. The AlgaeCal logos are all HTML -- the little circle is done via CSS.

2. The "Tap to Call" javascript that controls whether or not to show the feature during business hours, takes the user's timezone and converts it to PST to determine if the business is open. (This needs to be tested more, but I used [Moment.JS and MomentTimezone.JS](https://momentjs.com/timezone/) libraries to do the conversions).

## Comments

I tried to add comments within my SASS file, HTML file and JS file to help clearly explain my thinking, and to help orient the reader.

## Gulp

I've created a `gulpfile.js` with a watcher, so typing `gulp watch` will get things going. You can also type `gulp styles` to process the SCSS manually without the watch file. Running `gulp` (default task), will instruct the user to either run one of the afore mentioned.

### Development Notes

- Product Image notes: If I could source higher resolution images of the bottles, I could improve the quality and clarity of the product images (especially at larger screen sizes). I opted to scale the images using % widths in the CSS, so they would be responsive for larger displays. Because the images in the mockup had a low maximum resolution, the quality deteriorates as the images scale up. With some really nice high resolution product images, I could create some nicer web assets for larger screen sizes.

- I did make a few design decisions, for example with the nutritional facts table, to ensure that some of the general spacings matched, between the AlgaeCal Pro and Strontium Plus cards. There was some tiny spacing differences in the graphic design mockup, between the two cards, and I opted to not include those minor regularities to keep the cards looking the same, structure-wise.

### Thank You

I sincerely have appreciated the opportunity to do an assessment project for you, and wanted to put my best foot forwards. Wishing you well and let me know if there's any trouble with any of the files or if you have any questions.

Best,
Tim