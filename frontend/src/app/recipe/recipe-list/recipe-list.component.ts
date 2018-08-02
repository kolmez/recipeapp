import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private _recipes: Recipe[];

  constructor(private _recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this._recipeDataService.recipes.subscribe(items => this._recipes = items);
  }

}
