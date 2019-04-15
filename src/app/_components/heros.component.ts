import { Component, OnInit } from "@angular/core";
import { Hero } from '../_pojo/hero';
import {HEROS } from '../_pojo/HEROS'

@Component({
selector: 'heros-app',
templateUrl: '../_templates/heros.component.html',
styleUrls: ['../_css/heros.component.css']})

export class HerosComponent implements OnInit {

    heros = HEROS;

    selectedHero: Hero;
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    
    ngOnInit(){
        console.log('calll.....');
    }
};