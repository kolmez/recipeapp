import { Ingredient } from '../ingredient/ingredient.model';

export class Recipe {
  private _id: string;
  private _name: string;
  private _dateAdded: Date = new Date();
  private _ingredients: Ingredient[];

  constructor(name: string, ingredients?: Ingredient[], dateAdded?: Date) {
      this._ingredients = ingredients || new Array();
  }

  static fromJSON(json: any): Recipe {
    const rec = new Recipe(json.name, json.ingredients, json.created);
    rec._id = json._id;
    return rec;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  get dateAdded(): Date {
    return this._dateAdded;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  addIngredient(ing: Ingredient) {
    this._ingredients.push(ing);
  }

  toJSON() {
    return {
      name: this._name
    };
  }
}
