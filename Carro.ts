export class Carro{
    tanque: number;
    km: number;
    pessoas: number;

    constructor(){
        this.tanque = 0;
        this.km = 0;
        this.pessoas = 0;
    }

    mostrar(): string{
        let mostrar: string='';
        mostrar += "" + this.tanque + " L: " + this.km + " Km: " + this.pessoas + " Pessoas";
        return mostrar;
    }

    entrar(): boolean{
        if (this.pessoas < 2){
            this.pessoas += 1;
            return true;
        }else{
            return false;
        }
    }
    sair(): boolean{
        if (this.pessoas == 0){
            return false;
        }else{
            this.pessoas -= 1;
            return true;
        }
    }
    add(valLitros: number): void{
        this.tanque += valLitros;
        if (this.tanque > 10){
            this.tanque = 10;
        }
    }

    rodar(distancia: number): boolean{
        let gasto:number = distancia/10;
        if (this.tanque >= gasto){
            this.tanque -= gasto;
            this.km += distancia;
            return true;
        }else{
            console.log('sem galosina :/');
            return false;
        }
    }

}