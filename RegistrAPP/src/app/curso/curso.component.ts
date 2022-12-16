import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {

  public listaDeCursos:any = []

  constructor(private CursosService:CursosService){

   }

  ngOnInit(): void{
    this.cargarData();
  }

public cargarData(){
  this.CursosService.get('http://localhost:3000/posts')
  .subscribe(respuesta => {
    this.listaDeCursos = respuesta;
    console.log (this.listaDeCursos)
  })
}

// data = Object.values(this.cargarData)
}
