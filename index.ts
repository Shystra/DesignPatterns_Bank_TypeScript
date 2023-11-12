class ContaBancariaTs {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): number {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return valor
        }
        throw new Error("Saldo Insuficiente")
    }

    pagarConta(valor: number, tipo: string): void {
        // Implementação do pagamento de contas
    }
}

class ContaCorrenteTs extends ContaBancariaTs {
    // Métodos específicos de ContaCorrente
}

class ContaPoupancaTs extends ContaBancariaTs {
    // Métodos específicos de ContaPoupanca
}


let conta = new ContaBancariaTs(500);
try {
    conta.sacar(600); // Isso lançará um erro, pois o saldo é apenas 500
} catch (e:any) {
    console.error(e.message); // Isso imprimirá "Saldo insuficiente."
}
