import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    slides: Object[];

    constructor() {
        this.slides = [
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                date: "01/01/2018 - 10:00h",
                text: "Pellentesque semper dolor vitae neque finibus eleifend. Etiam scelerisque dolor vel massa maximus, et scelerisque nisl tempus. Morbi ut consequat quam. Nunc at nibh quis urna commodo volutpat. Proin massa tortor, porta nec condimentum a, dapibus eu sapien. Morbi at laoreet tortor, vel suscipit dolor. Suspendisse potenti. Sed viverra non lacus ac pellentesque."
            },
            {
                title: "Vestibulum erat nulla, feugiat et dolor ut",
                date: "01/02/2018 - 10:30h",
                text: "Aliquam consequat magna. Fusce iaculis iaculis dui nec aliquam. Quisque convallis ut massa non imperdiet. In ac egestas enim. Curabitur rutrum venenatis justo. Etiam molestie tempor nibh eu maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Ut malesuada magna dui, quis tempor dui tempus vitae",
                date: "02/01/2018 - 09:22h",
                text: "Eros ipsum sodales purus, nec aliquet risus lectus ut eros. Fusce at lectus sit amet orci molestie pulvinar. Pellentesque dapibus mauris eu dignissim accumsan. Cras bibendum felis dolor, in fringilla leo tincidunt ac. Duis ut nisl aliquet, commodo dui eu, venenatis velit."
            },
            {
                title: "Suspendisse convallis cursus lorem, vitae facilisis lorem consectetur non",
                date: "19/01/2018 - 10:01h",
                text: "Nullam aliquam, dolor nec lacinia tristique, turpis nunc faucibus mi, et porttitor magna arcu non quam. Morbi interdum mi eu elementum auctor. Vestibulum consectetur ipsum ac elit aliquam blandit. Curabitur vulputate ut purus rhoncus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                title: "Suspendisse euismod, arcu eu varius ornare",
                date: "01/01/2018 - 10:00h",
                text: "Fusce at lectus sit amet orci molestie pulvinar. Pellentesque dapibus mauris eu dignissim accumsan. Cras bibendum felis dolor, in fringilla leo tincidunt ac. Duis ut nisl aliquet, commodo dui eu, venenatis velit. <a>http://www.google.es</a> Duis quis neque eget diam lobortis venenatis."
            },
        ]
    }


    ngOnInit() {
    }

}
