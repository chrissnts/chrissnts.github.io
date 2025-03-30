function showTitle(element, title) {
    let span = document.createElement('span');
    span.className = 'image-title';
    span.innerText = title;

    span.style.position = "absolute";
    span.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    span.style.color = "white";
    span.style.padding = "10px 15px";
    span.style.borderRadius = "5px";
    span.style.fontSize = "40px";  
    span.style.fontWeight = "bold"; // Deixar em negrito
    span.style.top = "-100px";  // Move para o topo da imagem
    span.style.left = "50%"; 
    span.style.transform = "translate(-50%, 0)"; 
    span.style.whiteSpace = "nowrap"; 
    span.style.zIndex = "10";

    let parent = element.parentElement;
    parent.style.position = "relative";

    parent.appendChild(span);
}

function hideTitle(element) {
    let span = element.parentElement.querySelector('.image-title');
    if (span) {
        span.remove();
    }
}
