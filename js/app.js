'use strict'

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
