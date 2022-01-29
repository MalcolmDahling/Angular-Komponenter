import { Component, OnInit } from '@angular/core';
import { Animals } from './models/Animals';


@Component({
    selector: 'app-animals',
    templateUrl: './animals.component.html',
    styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

    animalsArray = [
        new Animals('cow', 12, 'burgerMeat', true),
        new Animals('pig', 3, 'sausageMeat', false),
        new Animals('chicken', 4, 'friedMeat', true),
        new Animals('dog', 1, 'chineseMeat', false)
    ];
    


    constructor() { }

    ngOnInit(): void {

    }

}


new AnimalsComponent();

