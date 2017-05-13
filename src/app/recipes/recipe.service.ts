
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Tarta de Manzana', 
            'Una deliciosa merienda!', 
            'http://www.rebanando.com/uploads/media/alejandrobodas2b.jpg?1395586243',
            [
                new Ingredient('Manzana', 2),
                new Ingredient('Leche', 1)
            ]),
        new Recipe(
            'Tiramissu', 
            'Un postre espectacular!',
            'https://labombacha.com/wp-content/uploads/2016/04/Tiramisu.jpg',
            [
                new Ingredient('Huevos', 2),
                new Ingredient('Queso', 1)
            ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}