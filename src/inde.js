
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Heroi {
  constructor(genero, name, age, type, attack) {
    this.generoPersonagem = genero;
    this.name = name;
    this.age = age;
    this.type = type;
    this.attack = attack;
  }

  static tipos = [
    ['Mago', 'Magia'],
    ['Guerreiro', 'Espada'],
    ['Monge', 'Artes Marciais'],
    ['Ninja', 'Shuriken']
  ];

  genero() {
    rl.question('Escolha o seu Gênero 1: M - 2: F - 3: Defina seu gênero ', (generoInput) => {
      if (!isNaN(generoInput) && generoInput >= 1 && generoInput <= 3) {
        switch (generoInput) {
          case '1':
            this.genero = 'O';
            this.nameInput();
            break;
          case '2':
            this.genero = 'A';
            this.nameInput();
            break;
          case '3':
            rl.question("Insira o Genero de seu Herói: ", (userInput) => {
              this.genero = userInput;
              this.nameInput();
            });
            break;
        }
      } else {
        console.log("Opção não é válida. Tente novamente.");
        this.genero();
      }
    });
  }

  nameInput() {
    rl.question("Insira o Nome de seu Herói: ", (nameInput) => {
      this.name = nameInput;
      this.ageInput();
    });
  }

  ageInput() {
    rl.question("Insira a Idade de seu Herói: ", (ageInput) => {
      this.age = ageInput;
      this.selectType();
    });
  }

  selectType() {
    rl.question("Selecione o tipo de Herói que deseja utilizar: 1 - Mago / 2 - Guerreiro / 3 - Monge / 4 - Ninja  ", (selectedType) => {
      if (!isNaN(selectedType) && selectedType >= 1 && selectedType <= 4) {
        switch (selectedType) {
          case '1':
            this.type = Heroi.tipos[0]
            this.write();
            break;
          case '2':
            this.type = Heroi.tipos[1];
            this.write();
            break;
          case '3':
            this.type = Heroi.tipos[2];
            this.write();
            break;
          case '4':
            this.type = Heroi.tipos[3];
            this.write();
            break;
        }
      } else {
        console.log("Opção não é válida. Tente novamente.");
        this.selectType();
      }
    });
  }

  write() {
    console.log(`${this.genero} ${this.name}, de ${this.age} anos, que é um ${this.type[0]} e ataca com ${this.type[1]}`);
    rl.close();
  }
}

rl.on('close', () => {
  console.log('Programa encerrado.');
  process.exit(0);
});

const heroi = new Heroi();
heroi.genero();