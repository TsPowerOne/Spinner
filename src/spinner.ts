import{ sfere } from './templates';
import { htmlParse } from '@tspower/core';
import * as stilesfere from './sfere.styl';
stilesfere.default;

export class spinner{
    public html:HTMLElement;
    public template:string;
    constructor(name:string){
        switch(name){
            case 'sfere':
                this.html = htmlParse(sfere);
                this.template = sfere;
            break;
        }

    }
}