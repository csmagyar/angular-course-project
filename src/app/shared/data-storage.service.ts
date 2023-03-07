import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://ng-course-recipe-book-20092-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(`${this.url}/recipes.json`, recipes).subscribe(response => {console.log(response);});
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(`${this.url}/recipes.json`).pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    })
  }
}
