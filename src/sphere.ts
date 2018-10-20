import {htmlParse} from '@tspower/core';
import * as sfere from './sphere.styl';
import * as t from './templates';
    export class Spin_Sphere{
        html:HTMLElement;
        template:string;
        constructor(){
            let temp = `<div class="spinner-container" >${t["sfere"]}</div>`;
            this.template =temp;
            this.html = htmlParse(temp);
            sfere.default;
        }
    }



