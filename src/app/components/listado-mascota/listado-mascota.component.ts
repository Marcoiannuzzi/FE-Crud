import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interface/macota';



const ELEMENT_DATA: Mascota[] = [
  {nombre:"Ciro",edad:3, color:"dorado",peso:12,raza:"Golden" },
  {nombre:"Rocky",edad:5, color:"negro",peso:15,raza:"Ovejero" },
  {nombre:"Fiona",edad:14, color:"negro",peso:8,raza:"Calle" },
  {nombre:"Masha",edad:10, color:"Marron",peso:10,raza:"Calle" },
  {nombre:"Chaplin",edad:14, color:"blanco",peso:13,raza:"Calle" },
  {nombre:"Charly",edad:3, color:"dorado",peso:12,raza:"Golden" },
  {nombre:"Bobby",edad:5, color:"negro",peso:15,raza:"Ovejero" },
  {nombre:"Ona",edad:14, color:"negro",peso:8,raza:"Calle" },
  {nombre:"Titan",edad:10, color:"Marron",peso:10,raza:"Calle" },
  {nombre:"Perro",edad:14, color:"blanco",peso:13,raza:"Calle" },

];


@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})


export class ListadoMascotaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'edad', 'peso', 'raza', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
