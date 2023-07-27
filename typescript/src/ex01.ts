//Crie uma classe abstrata chamada Ingresso que possui um valor em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
//b. crie uma classe VIP, que herda Ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
//c. crie uma classe Camarote, que herda ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.

abstract class Ingresso {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract imprimeValor(): void;
}

class Normal extends Ingresso {
    imprimeValor(){
        console.log(`Valor do ingresso Normal: R$${this.valor.toFixed(2)}`);
    }
}

class Vip extends Ingresso{
    private valorAdicional: number;

    constructor(valor: number, valorAdicional: number){
        super(valor);
        this.valorAdicional = valorAdicional;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso VIP: R$${(this.valor + this.valorAdicional).toFixed(2)}`);
    }
}

class Camarote extends Ingresso{
    private valorCamarote: number;

    constructor(valor: number, valorCamarote: number){
        super(valor);
        this.valorCamarote = valorCamarote;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso Camarote: R$${(this.valor + this.valorCamarote).toFixed(2)}`);
    }
}

const ingressoNormal = new Normal(15);
ingressoNormal.imprimeValor();

const ingressoVip = new Vip(15, 30);
ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(15, 150);
ingressoCamarote.imprimeValor();