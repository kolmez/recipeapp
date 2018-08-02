import { Injectable } from '../../../node_modules/@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from '../../../node_modules/rxjs';
import { RecipeDataService } from './recipe-data.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
    constructor(private recipeService: RecipeDataService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Recipe> {
            return this.recipeService.getRecipe(route.params['id']);
}
}
