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

document.querySelector('.inputSize').addEventListener('input', function () {
  const boxes = document.querySelectorAll('.boxItem');
  const newSize = this.value + 'px';

  boxes.forEach((box) => {
    box.style.height = newSize;
    box.style.width = newSize;
  });
});

document.querySelector('.direction-selector').addEventListener('change', function () {
  const container = document.querySelector('.content'); 
  container.style.flexDirection = this.value; 
});

document.querySelector('.justify-selector').addEventListener('change', function () {
  const container = document.querySelector('.content');
  container.style.justifyContent = this.value; // Altera o alinhamento de justificação
});

document.querySelector('.align-selector').addEventListener('change', function () {
  const container = document.querySelector('.content');
  container.style.alignItems = this.value; // Altera o alinhamento dos itens
});


