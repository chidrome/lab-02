'use strict'


document.addEventListener('DOMContentLoaded', ()=> {

  $.get('../data/page-1.json', (data, status) => {
    let imageObjects = [];
    data.forEach((imgObj) => {
      imageObjects.push(new ImageObject(imgObj.description, imgObj.horns, imgObj.image_url, imgObj.keyword, imgObj.title))
    })
    displayImages(imageObjects);
    populateKeywords(imageObjects);
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
  $.each(arr, function(index, value){
    if(value.keyword === 'rhino'){
      usrSelect.push(value);
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

// function to add the filtered keywords
var populateKeywords = (array) => {
  let keywords = []
  $.each(array, (i, obj) => {
    if(!keywords.includes(obj.keyword)){
      keywords.push(obj.keyword)
      $('#keywords').append(`<option value="${obj.keyword}">${firstLetterCap(obj.keyword)}</option>`)
    }
  })
}

// submit handler
var submitHandler = () => {
  
}


const firstLetterCap = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

