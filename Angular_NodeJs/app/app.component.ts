import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-produtos></pm-produtos>
        </div>
    `
})
export class AppComponent { 
    pageTile: string = 'Produtos Agridulce';
}
