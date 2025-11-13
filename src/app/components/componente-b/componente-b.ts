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

      titulo: "Científicos descubren un bosque subterráneo",
      imagen: "https://static.dw.com/image/61777936_804.jpg",
      texto: "Un equipo internacional de geólogos y biólogos ha anunciado el hallazgo de un bosque subterráneo intacto bajo una cueva en Ocaña. El ecosistema, que se estima tiene más de 20.000 años de antigüedad, alberga especies vegetales desconocidas y microorganismos que podrían revolucionar la medicina moderna.",
      fecha: "11/11/2025"

    },

    {

      titulo: "Japón inaugura el primer tren hipersónico para pasajeros",
      imagen: "https://i.ytimg.com/vi/SUBUTo82EQw/maxresdefault.jpg",
      texto: "Japón ha presentado oficialmente el Shinkansen H1, el primer tren hipersónico del mundo capaz de alcanzar velocidades de hasta 1.200 km/h gracias a un sistema de levitación magnética avanzada y túneles presurizados",
      fecha: "10/11/2025"

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
      

      //Conversion del formato de fecha para que se quede en el español 
      const fechaEu = new Date(this.newNoticia.fecha);
      const fechaFormateo = fechaEu.toLocaleDateString('es-ES');

      this.noticias.push ({...this.newNoticia, fecha: fechaFormateo});
      this.newNoticia = {
      titulo: "",
      imagen: "",
      texto: "",
      fecha: ""
    };
    alert("noticia subida con exito");
  }

}

