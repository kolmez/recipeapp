import { NgModule } from '../../../node_modules/@angular/core';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { CommonModule } from '../../../node_modules/@angular/common';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RecipeDataService } from './recipe-data.service';
import { RouterModule } from '../../../node_modules/@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes = [
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'recipe-detail/:id', component: RecipeDetailComponent}
  ];

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
      RecipeComponent,
      IngredientComponent,
      AddRecipeComponent,
      RecipeFilterPipe,
      RecipeListComponent],
    providers: [ RecipeDataService ]
  })
  export class RecipeModule { }
