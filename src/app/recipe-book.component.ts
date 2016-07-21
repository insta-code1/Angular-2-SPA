import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-book',
  templateUrl: 'recipe-book.component.html',
  directives: [HeaderComponent, RecipesComponent]
})
export class RecipeBookComponent {

}
