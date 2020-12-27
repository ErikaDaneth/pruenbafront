import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'


import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


export const firebaseconfig ={
  firebase: {
    apiKey: "AIzaSyDTGCc6-FSMaTet6mmbni_OIsjic15w7Ek",
    authDomain: "prueba1-f33dd.firebaseapp.com",
    databaseURL: "https://prueba1-f33dd-default-rtdb.firebaseio.com",
    storageBucket: "prueba1-f33dd.appspot.com",
    messagingSenderId: "697549560956",
    
  },
}
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
