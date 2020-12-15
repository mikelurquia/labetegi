import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Input('recipe') recipe : Recipe;

  onRecipeSelect() {
    console.log("RecipeItem -> EMIT");
    this.recipeSelected.emit(this.recipe);
  }
}
