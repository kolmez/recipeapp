import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe/recipe.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeDataService {
  private readonly _appUrl = '/API/';

  constructor(private http: HttpClient) {}

  get recipes(): Observable<Recipe[]> {
    return this.http
      .get(`${this._appUrl}/recipes/`)
      .pipe(map((list: any[]): Recipe[] => list.map(Recipe.fromJSON)));
  }

  addNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post(`${this._appUrl}/recipes/`, recipe)
      .pipe(map(Recipe.fromJSON));
  }

  removeRecipe(rec) {
    return this.http
      .delete(`${this._appUrl}/recipe/${rec.id}`)
      .pipe(map(Recipe.fromJSON));
  }
}
