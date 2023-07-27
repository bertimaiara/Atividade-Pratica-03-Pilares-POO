//Dado o seguinte diagrama:

//Identifique os atributos e comportamentos que são comuns entre os 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1 comportamento diferente para cada animal.

class Animal {
  protected nome: string;
  protected idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public emitirSom(): void {
    console.log("Este é o som deste animal.");
  }
}

class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, idade: number, raca: string){
        super(nome, idade);
        this.raca = raca;
    }

    public emitirSom() {
        console.log("Auauauauauau!");
    }

    public mostrarRaca() {
        console.log(`Raça: ${this.raca}`);
    }
}

class Cavalo extends Animal {
    private cor: string;

    constructor(nome: string, idade: number, cor: string){
        super(nome, idade)
        this.cor = cor;
    }

    public emitirSom() {
        console.log("Relinchando...");
    }

    public mostrarCor() {
        console.log(`Cor: ${this.cor}`);
    }
}

class Gato extends Animal {
    private pelagem: string;

    constructor(nome: string, idade: number, pelagem: string){
        super(nome, idade)
        this.pelagem = pelagem;
    }

    public emitirSom() {
        console.log("Miau!");
    }

    public mostrarPelagem(){
        console.log(`Pelagem: ${this.pelagem}`);
    }
}

const cachorro = new Cachorro('Jordachi', 7, 'Border Collie');
const cavalo = new Cavalo('Pégasus', 5, 'Preto');
const gato = new Gato('Nisk', 3, 'SRD');

cachorro.emitirSom();
cachorro.mostrarRaca();
console.log('-------------------------------');
cavalo.emitirSom();
cavalo.mostrarCor();
console.log('-------------------------------');
gato.emitirSom();
gato.mostrarPelagem();