GitHub

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/patcoston/midjourneygallery.git
git push --set-upstream origin main --force

Prompt for ChatGPT to generate the initial code.

Code a React component using TypeScript that will show a gallery of images with one image per row.
The images will be shown with 100% width and 100% height.
Each image will have a description below it.
It will show 10 images at a time.
There will be a row at the top with two buttons labeled PREVIOUS and NEXT.
There will be a row at the bottom with two buttons labeled PREVIOUS and NEXT.
The NEXT buttons will show the next 10 images.
The PREVIOUS buttons will show the previous 10 images.
The NEXT and PREVIOUS buttons will loop infinitely through the list.
If there are less than 10 images to display at the end of the list when the NEXT button is clicked, then it will display images from the start of the list to display 10 images.
If there are less than 10 images to display at the start of the list when the PREVIOUS button is clicked, then it will display images from the end of the list to display 10 images.
The image paths and descriptions will be in an array of objects.
Each object will have two properties.
The first property will be named "image" of type string. Add fake data for image path.
The second property will be named "prompt" of type string. Add fake data for image prompt.

