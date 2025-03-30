function change(event) {
    const clickedImage = event.target;
    if (clickedImage.style.opacity === "1") {
        clickedImage.style.opacity = "0"; 
    } else {
        clickedImage.style.opacity = "1"; 
    }
}