import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'

@Component({
  selector: 'app-root',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
 
  registroForm : FormGroup
  
  constructor(
    private _builder: FormBuilder
  ) {
    this.registroForm = this._builder.group({
      nombre: [''],
      apellido: [''],
      email:['', Validators.compose([Validators.email, Validators.required])],
      recogida: [''],
      salida:['']
    })
   }

   
  ngOnInit(): void {
  }

}
