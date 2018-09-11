import {Carro} from "./Carro";
declare function require(name:string): any;
var readline = require('readline-sync');
    
let hilux: Carro = new Carro();

let option : string = "";
let aux : string = ""; 
let texto: string ="" + "show: comando para mostrar status do veiculo\n" +
"enter: embarcar passageiro \n" +
"desembarcar: retirar passageiro \n" +
"abastecer: adicionar gasolina \n" +
"andar: distancia a percorrer\n" +
"stop: sair do programa\n";

while(true){
    console.log(texto);
    option = readline.question(" Escolha um comando:");
    if (option == "stop"){
        console.log('vlw flw');
        break;
    }
    if (option == 'show'){
        console.log(hilux.mostrar());
    }
    switch(option){
        case "enter":
            if( hilux.entrar() ){
                console.log("Embarcado");
            }else{
                console.log("carro cheio");
            }
            break;
        case "desembarcar":
            hilux.sair();
            break;
        case "abastecer":
            aux = readline.question("Quantos litros?:");
            hilux.add(parseFloat(aux));
            break;
        case "andar":
            aux = readline.question("Distancia?: ");
            hilux.rodar(parseFloat(aux));
            break;
    default:
        console.log('Comando invalido');
        break;
    }



}