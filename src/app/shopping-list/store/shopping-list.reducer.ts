import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('apple', 5),
    new Ingredient('egg', 10)
  ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            // must use a copy of the state object
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
    }
}