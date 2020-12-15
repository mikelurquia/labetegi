import { Component, ElementRef, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  @ViewChild('ingName') ingName: ElementRef;
  @ViewChild('ingAmount') ingAmount: ElementRef;
  @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();
  @Output('ingredientEdited') ingredientEdited = new EventEmitter<Ingredient>();

  onAddIngredient() {
    const name = this.ingName.nativeElement.value;
    const amount = this.ingAmount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }

}
