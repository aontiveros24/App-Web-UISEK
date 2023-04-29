import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public image:string="https://photoshop-kopona.com/uploads/posts/2020-06/1590997553_horse.jpg";
  public Titulo:string= "databinding";
  public name:string= "Aprendizaje simple";

  constructor (){ }
  ngOnInit(): void {

  }
}
