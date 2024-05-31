import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  title : string = 'Hola Mundo';
  color : string = 'blue';
  alumnos : string[] = ['Juan', 'Pedro', 'Maria'];

  mostrarDiv = false;

  alternarDiv() {
    this.mostrarDiv =!this.mostrarDiv;
  }
  // agregarAlumno(alumno : string) {
  //   if (alumno.length > 0) {
  //     this.alumnos.push(alumno);
  //   }
  //   else {
  //     alert('El alumno no puede estar vacío');
  //   }
  // }

  agregarAlumno(enterAlumno: HTMLInputElement) {
    const alumnoValue = enterAlumno.value.trim();
    if (alumnoValue.length > 0) {
      this.alumnos.push(alumnoValue);
      enterAlumno.value = '';
    } else {
      alert('El alumno no puede estar vacío');
    }
  }
}
