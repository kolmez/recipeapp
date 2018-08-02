import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';
import { IngredientComponent } from './recipe/ingredient/ingredient.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe/recipe-filter.pipe';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
