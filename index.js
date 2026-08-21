import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import readline from 'readline';



const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});


function pergunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => {
      resolve(resposta); 
    });
  });
}


async function main() {
  


 const valor = Math.floor(Math.random() * 10) + 1;
  let contador = 3;

  console.log(chalk.cyan(figlet.textSync('Jogo do Numero!')));
  console.log(boxen(chalk.yellow('Tente adivinhar o número entre 1 e 10!'), {
    padding: 1,
    borderColor: 'green',
    borderStyle: 'round'
  }));

  while (contador >= 1) {
    let resposta = await pergunta(chalk.magenta("👉 Um número entre 1 e 10 foi gerado, digite: "));
     
    console.log(chalk.gray("--------------------------"));
    if (Number(resposta) === valor) {
      console.log(boxen(chalk.green.bold("🎉 Você acertou o número, parabéns!"), {
        padding: 1,
        borderColor: 'green'
      }));
      console.log(chalk.gray("--------------------------"));
      break;
    } else {
      console.log(chalk.red.bold("❌ Você errou"));
      if (resposta > valor) {
        console.log(chalk.blue("📉 O número é menor"));
      } else {
        console.log(chalk.blue("📈 O número é maior"));
      }
      console.log(chalk.gray("--------------------------"));
      contador--;
      if (contador === 0) {
        console.log(boxen(chalk.red.bold(`💀 Você perdeu! O número era ${valor}`), {
          padding: 1,
          borderColor: 'red'
        }));
        break;
      }
      console.log(chalk.yellow(`⚠️ Você tem mais ${contador} chances`));
      console.log(chalk.gray("--------------------------"));
    }
  }


 rl.close(); 
}


main();
