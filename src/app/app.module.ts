import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Components
// import { UsuarioComponent } from './usuario/usuario.component';
import { UserComponent } from './usuario1/user.component';

@NgModule({
  declarations: [
    AppComponent,
    // UsuarioComponent
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
