import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { ShoppingListComponent } from './shopping-list';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-book',
  templateUrl: 'recipe-book.component.html',
  directives: [HeaderComponent, RecipesComponent, ShoppingListComponent]
})
export class RecipeBookComponent {

}
