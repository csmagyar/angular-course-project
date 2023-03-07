import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
