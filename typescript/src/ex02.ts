//Crie a classe Imovel, que possui um endereço e um preço.
//a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie métodos de acesso e impressão deste valor adicional.
//b. crie uma classe Velho, que herda Imovel e possui um desconto no preço. Crie métodos de acesso e impressão para este desconto.

class Imovel {
  protected endereco: string;
  protected preco: number;

  constructor(endereco: string, preco: number) {
    this.endereco = endereco;
    this.preco = preco;
  }

  public getPreco(): number {
    return this.preco;
  }

  public imprimeInformacoes(): void {
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
  }
}

class Novo extends Imovel {
  private adicional: number;

  constructor(endereco: string, preco: number, adicional: number) {
    super(endereco, preco);
    this.adicional = adicional;
  }

  public getAdicional(): number {
    return this.adicional;
  }

  public imprimeInformacoes(): void {
    super.imprimeInformacoes();
    console.log(`Adicional: R$ ${this.adicional.toFixed(2)}`);
  }
}

class Velho extends Imovel {
  private desconto: number;

  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);
    this.desconto = desconto;
  }

  public getDesconto(): number {
    return this.desconto;
  }

  public imprimeInformacoes(): void {
    super.imprimeInformacoes();
    console.log(`Desconto: R$ ${this.desconto.toFixed(2)}`);
  }
}

const imovelNovo = new Novo ('Rua Teste, 100', 50000, 20000);
imovelNovo.imprimeInformacoes();

const imovelVelho = new Velho('Rua B, 200', 80000, 10000);
imovelVelho.imprimeInformacoes();