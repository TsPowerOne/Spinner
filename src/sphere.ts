import {htmlParse} from '@tspower/core';
import * as sfere from './sfere.styl';
import * as t from './templates';

    export class Spin_Sphere{
        html:HTMLElement;
        template:string;
        constructor(){
            this.template = t["sfere"];
            this.html = htmlParse(t["sfere"]);
            sfere.default;
        }
    }



