import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { Ingredient } from '../ingredient/ingredient.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RecipeDataService } from '../recipe-data.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public readonly unitTypes = ['', 'Liter', 'Gram', 'Tbsp'];
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder, private _recipeDataService: RecipeDataService) {}

  get ingredients(): FormArray {
    return <FormArray>this.recipe.get('ingredients');
  }

  ngOnInit() {
    this.recipe = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: this.fb.array([this.createIngredients()])
    });

    this.ingredients.statusChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(data => {
        if (data === 'VALID') {
          this.ingredients.push(this.createIngredients());
        }
      });
  }
  createIngredients(): FormGroup {
    return this.fb.group({
      amount: [''],
      unit: [''],
      ingredientname: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit() {
    const recipe = new Recipe(this.recipe.value.name);
    for (const ing of this.recipe.value.ingredients) {
      if (ing.ingredientname.length > 2) {
        const ingredient = new Ingredient(
          ing.ingredientname,
          ing.amount,
          ing.unit
        );
        recipe.addIngredient(ingredient);
      }
    }
    this._recipeDataService.addNewRecipe(recipe).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding recipe for ${recipe.name}: ${error.error}`;
      }
    );
  }
}
