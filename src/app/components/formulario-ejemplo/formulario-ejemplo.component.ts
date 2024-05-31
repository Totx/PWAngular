import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-ejemplo.component.html',
  styleUrl: './formulario-ejemplo.component.css'
})
export class FormularioEjemploComponent {

  form : FormGroup;

  constructor() {
    this.form = new FormGroup({
      nombre: new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
      }),
      email: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormGroup({
        calle: new FormControl(''),
        numero: new FormControl(''),
        piso: new FormControl(''),
        departamento: new FormControl(''),
      }),
    })
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }

  cambiarNombrePorApellido(nombre : string, apellido : string) {
    this.form.get('nombre.nombre')?.setValue(apellido);
    this.form.get('nombre.apellido')?.setValue(nombre);
  }

}
