import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('A test Recipe',  'Second test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlyZitNn_h4dE7dzAY_qXpMU-Gu2sTcmn-5WTFRREnGRelcLfKw')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
