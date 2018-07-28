import { Injectable } from '@angular/core';
import {Recipe} from './recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {
  private _recipes = new Array<Recipe>();

  constructor() {
    const recipe1 = new Recipe('Spaghetti');
    this._recipes.push(recipe1);
  }

  get recipes(): Recipe[] {
    return this._recipes;
  }

  addNewRecipe(recipe) {
    this._recipes = [...this._recipes, recipe];
  }
}
