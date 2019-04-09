import { Component } from "@angular/core";
import { Hero } from '../_pojo/hero';

@Component({
selector: 'heros-app',
templateUrl: '../_templates/heros.component.html'})

export class HerosComponent {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}