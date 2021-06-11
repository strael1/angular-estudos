import { Component } from '@angular/core';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
    public nome: string = 'Rafael Macedo';
    public idade: number = 31;
    public email: string = 'rafael@gmail.com';
    public telefone: string = '81948328765';


    onCreateUser(){
        alert('Usuário criado.');
    }
}