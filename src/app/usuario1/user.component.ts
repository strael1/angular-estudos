import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {

   

    public nome: string = 'Zé chupeta';
    public idade: number = 55;
    public status: string = 'caloteiro';
    public idadeVerificada: boolean = false; 

    toggleColor: boolean = false;

    
    // constructor(){
    //     setInterval(() => {
    //         this.toggleColor = !this.toggleColor;
    //     },1000)
    // }

    
    // Sem public 
    // allowUserOnline: string = 'online';
    // allowUserOnline: boolean = true;

    chamarNome() {
        alert(this.nome);
    }

    checarIdade() {
        this.idadeVerificada = true;
    }
}

