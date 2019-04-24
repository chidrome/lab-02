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

function ImageObject(description, horns, imgUrl, keyword, title){
  this.description = description,
  this.horns = horns, 
  this.imgUrl = imgUrl,
  this.keyword = keyword,
  this.title = title
};

var filterPictures = (arr) => {
  let selectValue = $('.class').val();
  let usrSelect = [];
  $.each(arr, function(key, value){
    if(key.keyword === selectValue){
      usrSelect.push(element);
    }
  });
  return usrSelect;
}
