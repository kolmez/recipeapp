import { Recipe } from './recipe/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeDataService]
})
export class AppComponent implements OnInit {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  private _recipes: Recipe[];

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterRecipeName = val));
  }

  ngOnInit(): void {
    this._recipeDataService.recipes.subscribe(
      recipes => (this._recipes = recipes)
    );
  }

  get recipes() {
    return this._recipes;
  }

  newRecipeAdded(recipe) {
    this._recipeDataService
      .addNewRecipe(recipe)
      .subscribe((rec: Recipe) => this._recipes.push(rec));
  }

  removeRecipe(recipe: Recipe) {
    this._recipeDataService
      .removeRecipe(recipe)
      .subscribe(
        item =>
          (this._recipes = this._recipes.filter(val => item.id !== val.id))
      );
  }
}
