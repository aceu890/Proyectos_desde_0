function calcularFactorial() {
    let inputFactorial = document.getElementById("inputFactorial").value;
    // inputFactorial = parseInt(inputFactorial);
    const MuestraResultado = document.getElementById("MuestraResultado");
    const title = document.getElementById("title");

    title.classList.toggle('title2');  // activa y desactiva la clase
    //title.classList.add('title2');     // cambia la clase 1 sola vez

    let resultado = 1;
    for (var i = 1; i <= inputFactorial; i++)
    {
        console.log({resultado});
        resultado = resultado * i;
        //resultado va guardando la operacion resultado * i 
    }


    MuestraResultado.innerText = `El factorial de ${ inputFactorial} es: ${ resultado}`;
}


