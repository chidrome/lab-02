'use strict'
//global variables
var imageObjects = [];

document.addEventListener('DOMContentLoaded', ()=> {

  $.get('../data/page-1.json', (data, status) => {
    data.forEach((imgObj) => {
      imageObjects.push(new ImageObject(imgObj.description, imgObj.horns, imgObj.image_url, imgObj.keyword, imgObj.title))
    })
  })
  console.log(imageObjects);

})

function ImageObject(description, horns, imgUrl, keyword, title){
  this.description = description,
  this.horns = horns, 
  this.image_url = imgUrl,
  this.keyword = keyword,
  this.title = title
};

<<<<<<< HEAD
var filterPictures = (arr) => {
  let selectValue = $('.class').val();
  let usrSelect = [];
  arr.forEach(element => {
    if(element.keyword === selectValue){
      usrSelect.push(element);
    }
  });
  return usrSelect;
}
=======

>>>>>>> ee3f4476be04f84e2bf1d78a68b0360c6e39aab8
