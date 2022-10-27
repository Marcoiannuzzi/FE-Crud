import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interface/macota';



const LISTMASCOTAS: Mascota[] = [
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


export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'peso', 'raza', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(LISTMASCOTAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit(): void {
  }


  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


}
