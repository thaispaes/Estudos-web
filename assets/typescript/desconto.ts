const calculaDesconto = (valor:number, desconto:number = 0.05) : number => {
    const descontoTotal = valor * desconto
    return valor - descontoTotal;
}

const calculadora = (valor1:number, valor2:number, op:number) : number | null => {

    switch (op) {
        case op = 1:
            return valor1 + valor2
        case op = 2:
            return valor1 - valor2
        case op = 3:
            return valor1 / valor2
        case op = 4:
            return valor1 * valor2
        default: 
            return null
    }
    
}