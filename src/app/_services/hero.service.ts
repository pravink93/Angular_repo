import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';


@Injectable({
    providedIn: 'root'})
export class HeroService{
    constructor(private messageService: MessagesService){
    }

    
}