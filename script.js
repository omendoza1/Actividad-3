function ejecutarAlgoritmo() {
    // Obtener el valor del select
    const algoritmo = document.getElementById("algoritmo-select").value;
    // Obtener el elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");

    // Limpiar el contenido del elemento resultado
    resultado.innerHTML = "";


    if (algoritmo === "algoritmo1") {
        // Algoritmo 1: Números primos
        const numero = parseInt(document.getElementById("numero1").value);
        const primos = obtenerPrimos(numero);
        console.log(numero);
        resultado.innerHTML = `<p>Los números primos entre 1 y ${numero} son:</p>`;
        resultado.innerHTML += `<ul><li>${primos.join("</li><li>")}</li></ul>`;
    } else if (algoritmo === "algoritmo2") {
        // Algoritmo 2: Sumatoria
        const numero = document.getElementById("numero2").value;
        const sumatoria = obtenerSumatoria(numero);
        resultado.innerHTML = `<p>La sumatoria es: ${sumatoria}</p>`;
    } else if (algoritmo === "algoritmo3") {
        // Algoritmo 3: Serie de Fibonacci
        const numero = parseInt(document.getElementById("numero3").value);
        const fibonacci = obtenerFibonacci(numero);
        resultado.innerHTML = `<p>Los ${numero} términos de la serie de Fibonacci son:</p>`;
        resultado.innerHTML += `<ul><li>${fibonacci.join("</li><li>")}</li></ul>`;
    }
}

// Función para obtener los números primos entre 1 y N
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
// Función para obtener la sumatoria de 1^N + 2^N + 3^N + ... + N^N
function obtenerSumatoria(n) {
    // Validar que n sea un número entero
    if (!Number.isInteger(n)) {
        return 0;
    }

    let sumatoria = 0;

    for (let i = 1; i <= n; i++) {
        // Calcular la potencia y sumarla a la variable sumatoria
        sumatoria += Math.pow(i, n);
    }

    return sumatoria;
}
// Función para obtener los términos de la serie de Fibonacci hasta N
function obtenerFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

