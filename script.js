window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("algoritmo-select").addEventListener("change", function() {
        const algoritmo = this.value;
        document.getElementById("algoritmo1-input").style.display = algoritmo === "algoritmo1" ? "block" : "none";
        document.getElementById("algoritmo2-input").style.display = algoritmo === "algoritmo2" ? "block" : "none";
        document.getElementById("algoritmo3-input").style.display = algoritmo === "algoritmo3" ? "block" : "none";
    });
});

function ejecutarAlgoritmo() {
    const algoritmo = document.getElementById("algoritmo-select").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (algoritmo === "algoritmo1") {
        const numero = parseInt(document.getElementById("numero1").value);
        if (isNaN(numero) || numero < 1 || numero % 1 !== 0) {
            resultado.innerHTML = "<p>Error: Por favor ingrese un número entero positivo válido.</p>";
            return;
        }
        if (numero > 100000) {
            resultado.innerHTML = "<p>Error: El número es demasiado grande. Ingrese un número menor o igual a 100,000.</p>";
            return;
        }
        const primos = obtenerPrimos(numero);
        resultado.innerHTML = `<p>Los números primos entre 1 y ${numero} son:</p>`;
        resultado.innerHTML += `<ul><li>${primos.join("</li><li>")}</li></ul>`;
    } else if (algoritmo === "algoritmo2") {
        const numero = parseInt(document.getElementById("numero2").value);
        if (isNaN(numero) || numero < 1 || numero % 1 !== 0) {
            resultado.innerHTML = "<p>Error: Por favor ingrese un número entero positivo válido.</p>";
            return;
        }
        if (numero > 1000) {
            resultado.innerHTML = "<p>Error: El número es demasiado grande. Ingrese un número menor o igual a 1,000.</p>";
            return;
        }
        const sumatoria = obtenerSumatoria(numero);
        resultado.innerHTML = `<p>La sumatoria es: ${sumatoria}</p>`;
    } else if (algoritmo === "algoritmo3") {
        const numero = parseInt(document.getElementById("numero3").value);
        if (isNaN(numero) || numero < 1 || numero % 1 !== 0) {
            resultado.innerHTML = "<p>Error: Por favor ingrese un número entero positivo válido.</p>";
            return;
        }
        if (numero > 10000) {
            resultado.innerHTML = "<p>Error: El número es demasiado grande. Ingrese un número menor o igual a 10,000.</p>";
            return;
        }
        const fibonacci = obtenerFibonacci(numero);
        resultado.innerHTML = `<p>Los ${numero} términos de la serie de Fibonacci son:</p>`;
        resultado.innerHTML += `<ul><li>${fibonacci.join("</li><li>")}</li></ul>`;
    }
}

function obtenerPrimos(n) {
    const primos = [];
    for (let i = 2; i <= n; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }
    return primos;
}

function obtenerSumatoria(n) {
    let sumatoria = 0;

    for (let i = 1; i <= n; i++) {
        sumatoria += Math.pow(i, i);
    }

    return sumatoria;
}

function obtenerFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}