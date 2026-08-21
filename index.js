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
  
  // const nome = await pergunta("Nome: ");
  // const idade = await pergunta("Idade: ");
  // const altura = await pergunta("Altura (ex: 1.75): ");

  // let cor;
  // cor = await pergunta("Cor favorita: ");
  
  // console.log("\n--- Seus dados ---");
  // console.log("Nome:", nome);
  // console.log("Idade:", idade);
  // console.log("Altura:", altura);
  // console.log("Cor favorita:", cor);

  

  // console.log("\n--- Operações ---");
  // console.log("1 - Soma");
  // console.log("2 - Subtração");
  // console.log("3 - Multiplicação");
  // console.log("4 - Divisão");

  // let opçao = await pergunta("Escolha uma operação: ");

  // let n1 = Number( await pergunta("Digite um número: "  )  );
  // let n2 = Number( await pergunta("Digite outro número: ") ); 




  // switch (opçao) {
  //   case "1":
  //     console.log(`${n1} + ${n2} = ${n1 + n2}`);
  //     break;
  //   case "2":
  //     console.log(n1 + " - " + n2 + " = " + (n1 - n2));
  //     break;
  //   case "3":
  //     console.log(n1 + " * " + n2 + " = " + (n1 * n2));
  //     break;
  //   case "4":
  //     console.log(n1 + " / " + n2 + " = " + (n1 / n2));
  //     break;
  //   default:
  //     console.log("Opção inválida!");
  // }
  


  // let n = Number( await pergunta("Digite um número: ") );
  // if (n % 2 == 0) {
  //   console.log(`${n} é par`);
  // } else {
  //   console.log(`${n} é impar`);
  // }




  // const n1 = Number(await pergunta("Digite um número: "));
  // const n2 = Number(await pergunta("Digite outro número: "));
  // const n3 = Number(await pergunta("Digite outro número: "));
  // let maior = n1;

  // if (maior < n2) {
  //   maior = n2;
  // }

  // if (maior < n3) {
  //   maior = n3;
  // }

  // console.log(`o maior valor é: ${maior}`)






  // const n = Number(await pergunta("digite o valor que vc deseja ver a tabuada de multiplicaçao: "));
  // console.log(`a tabuade de ${n}`);

  // for (let i = 1; i <= 10; i++) {

  //   console.log(` ${n} * ${i} = ${n * i} `)
  // }





  // let n = Number(await pergunta("digite o valor que vc deseja ver contagem regresiva: "));

  // while (n >= 0) {
  
  //   console.log(n)
  //   n--
  // }
 




  // const n1 = Number (await pergunta("digite a primeira nota: "));
  // const n2 = Number (await pergunta("digite a segunda  nota: "));
  // const n3 = Number (await pergunta("digite a terceira nota: "));
  // const n4 = Number (await pergunta("digite a  querta  nota: "));
  // const media = (n1 + n2 + n3 + n4) / 4;


  // if (media >= 7) {
  //   console.log("voce foi aprovado com a media: ", media)
  // }else if (media >= 5) {
  //   console.log("voce foi para a recuperaçao com a media: ", media)
  // }else 
  //   console.log("voce foi reprovado com a media: ", media)



  //      let valor;
  //   while (true) {
  //      valor = Number (await pergunta("digite o valor que voce deseja ver o fatorial: "));

  //      if (isNaN(valor) || valor < 0) {
  //        console.log("Digite um valor válido...");
  //      } else {
  //          break;
  //     }

      
  //   }
   
   
  //  let fatorial = 1;

  //  for (let i = valor; i >= 1; i--) {
    
  //     fatorial *= i;
  //  }
  //  console.log(`o fatorial de ${valor} é: ${fatorial} `)








  // const palavra = await pergunta("digite uma palavra: ");
  // let resultado = palavra;
  // resultado = resultado.toLowerCase()
  // console.log(resultado)

  // resultado = palavra.split("").reverse().join("");
  // console.log(resultado)

  // if (palavra === resultado ) {
  //   console.log("a palavra é palíndromo")
  // }else
  //   console.log(`a palavra nao é palíndromo`)



  // const celsius = Number (await pergunta("digite a temperatura em celsius: "));
  // const fahrenheit = (celsius * 9 / 5) + 32;
  // const kelvin = celsius + 273.15;

  // console.log(`\nTemperatura em Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
  // console.log(`Temperatura em Kelvin: ${kelvin.toFixed(2)} K`);

  // const  valor = Math.floor(Math.random() * 10) + 1;
  // let contador = 3;

  // while (contador >= 1) {
  //   let resposta = await pergunta("um numero entre 1 e 10 foi gerado,Digite um número: ");
     
  //   console.log("--------------------------");
  //   console.log("--------------------------");
  //   if (Number(resposta) === valor) {
  //     console.log("🎉 voce acertou o numero parabens");
  //     console.log("--------------------------");
  //     console.log("--------------------------");
  //     break;
  //   }else{
  //     console.log("❌ voce errou");
  //     if (resposta > valor) {
  //       console.log(" o numero é menor");
  //     }else{
  //       console.log(" o numero é maior");
  //     }
  //     console.log("--------------------------");
  //     console.log("--------------------------");
  //     contador--
  //     if (contador === 0) {
  //        console.log(`Você perdeu! O número era ${valor}`);
  //        break;
  //     }
      
  //     console.log(`voce tem mais ${contador} chances `);
  //     console.log("--------------------------");
  //     console.log("--------------------------");

     
  //   }
    
  // }

  // function dobrar(n){
  //   return n * 2;

  // }

  
  // console.log(dobrar(7));

  // console.log(dobrar(15));


  // function MaiorDeIdade(i){
  //   if (i >= 18) {
  //     console.log("maior de 18 anos")
  //     return true;
  //   }else{
  //     console.log("nao é maior de 18 anos")
  //     return false;
  //   }

  // }
  
  //   let idade = Number (await pergunta("digite sua idade: "));
  //  console.log(MaiorDeIdade(idade));

//   function saudacao(nome, periodo) {
//     if (periodo === "manha") return `bom dia ${nome}`;
//     if (periodo === "tarde") return `boa tarde ${nome}`;
//     if (periodo === "noite") return `boa noite ${nome}`;
// }

// console.log(saudacao("Genidy", "noite"));

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
