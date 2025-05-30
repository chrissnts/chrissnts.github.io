
function ex01() {
    
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value
    alert(input)
    document.getElementById('output').innerHTML = resolve03(...input.trim().split(" ").map(Number));
    form.reset()
}

function resolve03() {
    const map = new Map();

    for (let i = 0; i < arguments.length; i++) {
        map.set(i, arguments[i]);
    }

    const result = [];

    for (let [key, value] of map.entries()) {
        result.push({
            value: value,
            isEven: typeof value === 'number' && value % 2 === 0
        });
    }

    return result;
}