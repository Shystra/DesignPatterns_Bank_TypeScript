"use strict";
class ContaBancariaTs {
    constructor(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return valor;
        }
        throw new Error("Saldo Insuficiente");
    }
    pagarConta(valor, tipo) {
        // Implementação do pagamento de contas
    }
}
class ContaCorrenteTs extends ContaBancariaTs {
}
class ContaPoupancaTs extends ContaBancariaTs {
}
let conta = new ContaBancariaTs(500);
try {
    conta.sacar(600); // Isso lançará um erro, pois o saldo é apenas 500
}
catch (e) {
    console.error(e.message); // Isso imprimirá "Saldo insuficiente."
}
