class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque genérico';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Dz6', 1000, 'mago');
heroi1.atacar(); 

const heroi2 = new Heroi('Dz7', 35, 'guerreiro');
heroi2.atacar(); 

const heroi3 = new Heroi('Dz8', 32, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Dz9', 45, 'ninja');
heroi4.atacar(); 
