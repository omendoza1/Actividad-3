function numPrimos() {
    let cantidad = document.getElementById("numero1").value
    let j = 2;
    let numerosPrimos = [];
    setInterval(function () {
        location.href = location.href;
    }, 1000 * 10);
    for (; j < cantidad; j++) {
        if (primo(j)) {
            numerosPrimos.push(j);
        }
    }
    alert("La cantidad de números primos es: " + numerosPrimos.length );
    if (cantidad > 3) {
        alert("Los números primos entre el 1 y el " + `${cantidad} ` + "son: " + numerosPrimos);
    } if (numerosPrimos.length == 0) {
        alert("El número primo entre el 1 y el " + `${cantidad} ` + "es: Ninguno");
    } if (numerosPrimos.length == 1) {
        alert("El número primo entre el 1 y el " + `${cantidad} ` + "es: " + numerosPrimos);
    }
    function primo(numero) {
        setInterval(function () {
            location.href = location.href;
        }, 1000 * 10);
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero !== 1;
    }
}
function sum() {
    let numeroN = document.getElementById("numero2").value;
    let vectorSum = [numeroN];
    let totalSum = 0;
    let i;
    setInterval(function () {
        location.href = location.href;
    }, 1000 * 10);
    for (i = 0; i < numeroN; i++) {
        vectorSum[i] = Math.pow((i + 1), numeroN);
        alert((i + 1) + "^" + numeroN + " = " + vectorSum[i]);
        totalSum = totalSum + vectorSum[i];
    }
    alert("La sumatoria total es: " + totalSum);
}
function fibonacci() {
    const numeroN = document.getElementById("numero3").value;
    const fib = [0, 1];
    setInterval(function () {
        location.href = location.href;
    }, 1000 * 10);
    if (numeroN < 2) {
        alert("Por favor ingrese un número mayor a 1!")
    } else {
        for (i = 2; i <= numeroN; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
            document.writeln(fib[i]);
        }
    }
}
function* generator() {
    let a = 1;
    let b = 1;
    while (true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}
