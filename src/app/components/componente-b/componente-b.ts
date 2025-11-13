import { InterfaceB } from './../../interfaces/interface-b';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-componente-b',
  imports: [FormsModule],
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css',
})

export class ComponenteB {


  //Para usar el Two Way Data Binding necesitamos importar la libreria de FormsModule y la directivda ngModel
  noticias : InterfaceB []  = [

    {

      titulo: "noticia de prueba",
      imagen: "assets/1366_2000-convertido-de-webp.png",
      texto: "esto es un texto de una noticia 1",
      fecha: "11/11/2025"

    },

    {

      titulo: "noticia de prueba2",
      imagen: 'assets/1366_2000-convertido-de-webp.png',
      texto: 'esto es un texto de una noticia 1',
      fecha: '11/11/2025'

    }

  ];

    newNoticia : InterfaceB = {
      titulo: "",
      imagen: "",
      texto: "",
      fecha: ""
    }

    agregarNoticia() {
      if(!this.newNoticia.titulo || !this.newNoticia.imagen || !this.newNoticia.texto || !this.newNoticia.fecha) {
        alert("Los campos no pueden estar vacios");
        return;
      }
      this.noticias.push ({ ...this.newNoticia});
      this.newNoticia = {
      titulo: "",
      imagen: "",
      texto: "",
      fecha: ""
    };
    alert("noticia subida con exito");
  }

}

