import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A test recipe', 'This is a simple description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A second recipe', 'This is a second description', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Bizcocho-San_Isidro_%28Madrid%29.JPG'),
  ];

  onRecipeSelect(recipe: Recipe){
    console.log("Recipe was selected");
    this.recipeWasSelected.emit(recipe);
  }
}
