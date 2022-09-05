# Developer Test Guide

## How to start

1. Download the source code to your local env
2. Install node modules in the project directory.

## Start Server

In the project directory, run the following command.
`npm install -g nodemon`
`cd server/`
`nodemon index`

## About APIs

The server is running on http://localhost:9080 and there are 3 APIs listening.

1. Retrieve products total number
   `http://localhost:9080/products/total`

2. Retrieve products list by page
   `http://localhost:9080/products/page/:pageId`

3. Retrieve product information by id.
   `http://localhost:9080/products/:\_id`

## Your Tasks

Build the product listing page looking like this screenshot. https://prnt.sc/10ecaop

- Note: Only build the component parts highlighted in the red rectangle

- Requirements: Pay attention to implementing the following functionalities based upon the product list page created.

1. Pagination
2. Thumbnail popup animation on mouseover
3. Tooltip / Confirmation functionality on action buttons.
4. Show the page loading bar when the page is retrieving the data from APIs.

video description: https://www.loom.com/share/86ec489fea304ec084c65241dbdd420c

- Styling: You can use 3rd party libraries like bootstrap
