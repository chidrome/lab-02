'use strict'


document.addEventListener('DOMContentLoaded', ()=> {

  $.get('../data/page-1.json', (data, status) => {
    let imageObjects = [];
    data.forEach((imgObj) => {
      imageObjects.push(new ImageObject(imgObj.description, imgObj.horns, imgObj.image_url, imgObj.keyword, imgObj.title))
    })
    displayImages(imageObjects);
  })

  

})

// constructor function
function ImageObject(description, horns, imgUrl, keyword, title){
  this.description = description,
  this.horns = horns, 
  this.imgUrl = imgUrl,
  this.keyword = keyword,
  this.title = title
};

var filterPictures = (arr) => {
  let selectValue = $('.pictures').val();
  let usrSelect = [];
  $.each(arr, function(key, value){
    if(key.keyword === selectValue){
      usrSelect.push(element);
    }
  });
  return usrSelect;
}
// display images function
const displayImages = (array) => {

  array.forEach((img) => {
    $('div.container').append(`<img src="${img.imgUrl}" class="pictures" />`)
  })
}


