import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;

  ngOnInit() {
    this.recipe = new FormGroup({
      name: new FormControl('risotto',
        [Validators.required, Validators.minLength(2)])
    });
  }

  constructor() {}

  onSubmit() {
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }

}
