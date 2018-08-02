import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {NgModule} from '../../../node_modules/@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RecipeModule } from '../recipe/recipe.module';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';

const appRoutes: Routes = [
  {
    path: 'recipe',
    loadChildren: () => RecipeModule,
    data: { preload: true }
  },
  { path: '', redirectTo: 'recipe/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadStrategy})
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadStrategy
  ]
})
export class AppRoutingModule { }
