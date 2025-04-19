function changeColor(element) {
    const selectedColor = element.style.backgroundColor;
    const all = document.querySelectorAll('.boxItem'); 

    for (let index = 0; index < all.length; index++) {
        all[index].style.backgroundColor = selectedColor;
    }
}

function setShape(shape) {
    const all = document.querySelectorAll('.boxItem');
  
    all.forEach(item => {
      if (shape === 'circle') {
        item.style.borderRadius = '50%';
      } else {
        item.style.borderRadius = '0';
      }
    });
  }