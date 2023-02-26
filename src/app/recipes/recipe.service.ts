import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe('Stuffed cabbage',
    'It tastes even better the next day (and the day after that).',
    'https://images.ctfassets.net/314o13npeir2/01mpLWpl4CcnVCTBhK95UM/c7940aa2e3c2b01224461876ce3839c9/hungarian-stuffed-cabbage-toltott-kaposzta.JPG?w=620&q=80&fm=webp',
    [
      new Ingredient('sour cabbage leaves', 10),
      new Ingredient('pork meat', 500),
      new Ingredient('rice', 100)
    ]),
    new Recipe('Goulash',
    'The traditional side to the goulash is egg dumplings.',
    'https://images.ctfassets.net/314o13npeir2/SiNChikHmTDXYwrTlk5Ut/1e99cc57c0a773d2e6109ff1630f7826/hungarian-beef-goulash-marhaporkolt.JPG?w=620&fl=progressive&q=80',
    [
      new Ingredient('beef meat', 800),
      new Ingredient('sweet paprika', 3),
      new Ingredient('onion', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
