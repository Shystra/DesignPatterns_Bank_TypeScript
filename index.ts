class ContaBancaria {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            throw new Error("Saldo insuficiente para saque.");
        }
    }

    obterSaldo(): number {
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    private taxaDeOperacao: number;

    constructor(saldoInicial: number, taxaDeOperacao: number = 0.01) {
        super(saldoInicial);
        this.taxaDeOperacao = taxaDeOperacao;
    }

    sacar(valor: number): void {
        const valorComTaxa = valor * (1 + this.taxaDeOperacao);
        super.sacar(valorComTaxa);
    }
}

class ContaPoupanca extends ContaBancaria {
    private taxaDeJuros: number;

    constructor(saldoInicial: number, taxaDeJuros: number = 0.02) {
        super(saldoInicial);
        this.taxaDeJuros = taxaDeJuros;
    }

    aplicarJuros(): void {
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
