let registrarMovimiento = true;
let balanceTotal = 0;
let historial = "";

// Proceso principal
while (registrarMovimiento) {
    const opcion = prompt("¿Es tu movimiento un ingreso o un egreso? Escribe 'salir' para terminar");
    
    if (opcion === "salir") {
        registrarMovimiento = false;
        alert(`Balance total: $${balanceTotal}`);
    }
    else if (opcion === "ingreso") {
        const monto = Number(prompt("Escribe el monto exacto de tu ingreso"));
        if (!isNaN(monto)) {
            balanceTotal += monto;
            historial += `INGRESO: $${monto}\n`;
            alert(`Ingreso registrado: $${monto}`);
        } else {
            alert("El monto debe ser un número");
        }
    }
    else if (opcion === "egreso") {
        const monto = Number(prompt("Escribe el monto exacto de tu egreso"));
        if (!isNaN(monto)) {
            balanceTotal -= monto;
            historial += `EGRESO: $${monto}\n`;
            alert(`Egreso registrado: $${monto}`);
        } else {
            alert("El monto debe ser un número");
        }
    }
    else {
        alert("Opción no válida. Escribe 'ingreso', 'egreso' o 'salir'");
    }
}

// Console.log ÚNICAMENTE al final del código
console.log(
    "=== HISTORIAL DE MOVIMIENTOS ===\n" +
    historial +
    "===============================\n" +
    `TOTAL FINAL: $${balanceTotal}`
);













