# NASA Image Search

## Background

This project is a react frontend app which handles data served from [NASA Open APIs](https://api.nasa.gov/). A hosted version of the app can be seen [here](https://nasa-images-js.herokuapp.com/). It was made ofor a Dev test so everyone keep your fingers crossed for me.

## Getting Started

### Prerequisites

This project needs [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) to run locally. Install if necessary. 


### Installing
1. Fork this repo and clone it onto your machine.
```bash
git clone 'https://github.com/${username}/NASA_Images.git'
cd nasa_images
```
2. Run the following command in your terminal to install the project's dependencies:
```bash
npm install
```
3. Run the start script
```bash
npm start
```
This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## Improving Nasa_Images

If I were to spend more time working on this project there are a number of improvements I would like to make.<br />

Listed below are some examples of the issues to be addressed.

* Improve the structure of the app, so that blocks of code could be componentized without loss of functionality (for example the code responsible for pagination in Search.js).  

* Fix issue where invalid page numbers can be navigated to. 
* Improve return button functionality on SingleImage pages, so that the previously searched term can be returned to. 
* Add functionality which allows searching for audio and video (which would be a relatively simple task due to the NASA API's ease of use and specific, useful parameters).
* Improve design of mobile version, particularly to improve look of images (e.g. maintain aspect ratio).
* Improve design of site, potentially with 3D background of a Galaxy made using Three.js


