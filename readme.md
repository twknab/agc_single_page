# Font Notes

I did not have the `Glober` font, and couldn't find any freeware versions -- so I opted to do everything with Roboto, matching as very best as I could, despite not having the same font as in the mockup. I also set sans-serif as a 3rd fall back option in the event that Glober is not found on the system and if Roboto fails to load via Google Fonts. Because I was not able to test with the Glober font locally, there might need to be a few tweaks for a pixel-perfect.

## Cool Features

1. The AlgaeCal logos are all HTML -- the little circle is done via CSS. This is a good method to keep another image out of the page, and speed up load time -- however, if the user didn't have Glober installed the logo would default to Roboto. To ensure the logo would look identical on all devices, I'd probably swap this out for a higher resolution transparent PNG image of the logo, for this particular situation.

2. The "Tap to Call" javascript that controls whether or not to show the feature during business hours, takes the user's timezone and converts it to PST to determine if the business is open. (This needs to be tested more, but I used [Moment.JS and MomentTimezone.JS](https://momentjs.com/timezone/) libraries to do the conversions).

3. I added a fav icon, gathered from your existing website.

4. SEO metadata has been included, as well as use of `alt` tags on all images; AlgaeCal brand name and "bone density" keywords are used often.

5. The play button and the "Tap to Play" is all done in HTML and CSS. The only image is the hand-drawn arrow itself. Which I could improve its responsiveness by having access to a larger resolution image of the arrow. (It's always best to have high resolution assets to scale them down for mobile, as we can always scale down OK, but scaling up to larger view ports can cause pixelation, etc). But the rollover effects and the gradient on the button, including the button rounded edges are all done in CSS.

6. I used the Wistia Video Player API so that when the play button the clicked, the play button hides. When the video ends, the video will reset and the button will re-appear.

7. Clicking "Buy Now" at bottom of page will reveal bundles if they are still hidden (e.g, video has not been played or viewed).

## Comments

I tried to add comments within my SASS file, HTML file and JS file to help clearly explain my thinking, and to help orient the reader.

## Gulp

I've created a `gulpfile.js` with a watcher, so typing `gulp watch` will get things going. You can also type `gulp styles` to process the SCSS manually without the watch file. Running `gulp` (default task), will instruct the user to either run one of the afore mentioned.

### SEO Improvements

It looks like Wistia can also be hooked into tracking -- and is something I would ideally setup if a live production site. I would also likely try and target individal keyword choices, based upon research (e.g, tools like SEMRush.com) and incorporate this more into body text and headings. For now my primary targeting was "Bone Density" and "Bone Health" and branding name, "AlgaeCal" -- these are included in most all `alt=""` tags for all images, and in most all copy paragraphs. This could fine tuned and dialed in a more scientific manner.

### Developer Resources

I've included a folder called `/developer_resources` in the root of the project. Includes some screenshots at mobile, tablet and laptop displays, and includes some design reosurces as well that were used in the project.

### Development Notes

- Product Image notes: If I could source higher resolution images of the bottles, I could improve the quality and clarity of the product images (especially at larger screen sizes). I opted to scale the images using % widths in the CSS, so they would be responsive for larger displays. Because the images in the mockup had a low maximum resolution, the quality deteriorates as the images scale up. With some really nice high resolution product images, I could create some nicer web assets for larger screen sizes.

- I did make a few design decisions, for example with the nutritional facts table, to ensure that some of the general spacings matched, between the AlgaeCal Pro and Strontium Plus cards. There was some tiny spacing differences in the graphic design mockup, between the two cards, and I opted to not include those minor irregularities to keep the cards looking the same, structure-wise.

### Improvements

I would refactor and clean up my media queries, if there was something that immedietely stood out that could use some refactoring. For brevity's sake, and to limit time investment for a non-production page, I've kept things as is for now.

### Thank You

I sincerely have appreciated the opportunity to do an assessment project for you, and wanted to put my best foot forwards. Wishing you well and let me know if there's any trouble with any of the files or if you have any questions.

Best,
Tim