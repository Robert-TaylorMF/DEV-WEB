function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = 'Resultado: ';
    let valConvertido = 0;

    if(unidade === "cmToMet"){
        valConvertido = resultado + (valor / 100);
    } else if (unidade === "metToCm") {
        valConvertido = resultado + (valor * 100);
    }

    document.getElementById('resultado').value = valConvertido;
}