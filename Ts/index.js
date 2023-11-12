"use strict";
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
        else {
            throw new Error("Saldo insuficiente para saque.");
        }
    }
    obterSaldo() {
        return this.saldo;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial, taxaDeOperacao = 0.01) {
        super(saldoInicial);
        this.taxaDeOperacao = taxaDeOperacao;
    }
    sacar(valor) {
        const valorComTaxa = valor * (1 + this.taxaDeOperacao);
        super.sacar(valorComTaxa);
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(saldoInicial, taxaDeJuros = 0.02) {
        super(saldoInicial);
        this.taxaDeJuros = taxaDeJuros;
    }
    aplicarJuros() {
        this.saldo += this.saldo * this.taxaDeJuros;
        console.log(`Juros de R$${this.saldo * this.taxaDeJuros} aplicados.`);
    }
}
// Criação das contas
let contaCorrente = new ContaCorrente(1000, 0.01);
let contaPoupanca = new ContaPoupanca(1000, 0.02);
// Polimorfismo: Chama o método sacar, que se comporta de forma diferente dependendo do tipo de conta.
contaCorrente.sacar(100); // Será aplicada a taxa de operação
contaPoupanca.sacar(100); // Sem taxa de operação
// Aplicar juros apenas está disponível para ContaPoupanca
contaPoupanca.aplicarJuros();
// Obter saldo - disponível para ambas as contas, comportamento herdado da classe base
console.log(contaCorrente.obterSaldo());
console.log(contaPoupanca.obterSaldo());


// Neste exemplo, mesmo chamando o mesmo método sacar, o comportamento é diferente dependendo do tipo de conta. 
// A ContaCorrente leva em consideração uma taxaDeOperacao adicional, enquanto a ContaPoupanca usa a implementação direta da classe base ContaBancaria.

// Além disso, a ContaPoupanca introduz um novo método aplicarJuros, que não existe na ContaBancaria nem na ContaCorrente. 
// Isso mostra como a herança permite estender e personalizar o comportamento das subclasses.