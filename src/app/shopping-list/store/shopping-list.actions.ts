import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

// to rule out typos
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    payload: Ingredient;
}