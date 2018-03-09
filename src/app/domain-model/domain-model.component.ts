import { Component, OnInit } from '@angular/core';

class joke {
    public setup: string;
    public punchline: string;
    public hide = true;    
}

constructor( setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
}

toggle() {
    this.hide = !this.hide;
}

@Component({
    selector: 'app-domain-model',
    templateUrl: './domain-model.component.html',
    styleUrls: ['./domain-model.component.scss']
})
export class DomainModelComponent implements OnInit {
    jokes: joke[];
    
    constructor() {
        this.jokes = [
            new joke("Holis 1"),
            new joke("Holis 2"),
            new joke("Holis 3"),
        ];
     }

    ngOnInit() {
    }

}
