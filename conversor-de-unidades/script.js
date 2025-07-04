function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = '';
    let valConvertido = 0;

    if(unidade === "cmToMet"){
        valConvertido = valor / 100;
    } else if (unidade === "metToCm") {
        valConvertido = valor * 100;
    }

    document.getElementById('resultado').value = valConvertido;
}