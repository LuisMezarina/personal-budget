# personal-budget

## Pasos que se siguio:

### Se crearon las variables:

1. Let registrarMovimiento para que se inicie el codigo y futuros bucles, como aun no tiene valor ya que los pondra el usuario de le agrega simplemente un "= true", lo que a su vez servira para cerrar el bucle con un false.
2. Let balanceTotal = 0 ya que esto se trabajará en el bucle sumando y restando.
3. Let historial ya que necesitamos esta variable para que se muestre en la consola.

### Explicacion del bucle:

1. Se creo un bucle while para que se repita el codigo hasta que el usuario lo termine aplicando el mismo codigo al escribir "salir".
2. Se creo la condicional if para que si el usuario aprieta salir inmediatamente se cierre el bucle.
3. Se crearon las condicionales else if para cuando el usuario quiera poner un ingreso o egreso, ademas de sus propios if internos por si escribe algun valor no valido.
4. Para finalizar se creo un else el el cual si el usuario no sa un valor valido le recalquen las opciones que debe poner.

### Explicacion de la consola:

En la consola se agrego un historial con el que se trabaj en string, por ello el += y un balance en el final que si se trabaja con number.