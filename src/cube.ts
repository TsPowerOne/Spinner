import { htmlParse, log} from '@tspower/core';
import * as cubi from './cube.styl';
import * as t from './templates';
    export class Spin_Cube {

        html:HTMLElement;
        template:string;

        constructor(){

            let temp = `<div class="sk-cube-container" >${t["cubi"]}</div>`;
            this.template =temp;
            this.html = htmlParse(temp);
            cubi.default;
        }
    }



