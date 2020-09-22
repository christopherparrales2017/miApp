import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
frase:any={
  mensaje:"Un gran poder con lleva una gran responsabilidad",
  autor:"Ben Parker"
}
  mostrar = true;
  heroes=["Superman","Batman","Spiderman"]
  constructor() { }

  ngOnInit(): void {
  }

}
