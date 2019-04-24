'use strict'
//global variables
var imageObjects = [];

document.addEventListener('DOMContentLoaded', ()=> {

  $.get('../data/page-1.json', (data, status) => {
    data.forEach((imgObj) => {
      imageObjects.push(imgObj)
    })
  })
  console.log(imageObjects);

})

function ImaageObject(description, horns, imgUrl, keyword, title){
  this.description = description,
  this.horns = horns, 
  this.imgUrl = imgUrl,
  this.keyword = keyword,
  this.title = title
};

