import { htmlParse, log} from '@tspower/core';
import * as cubi from './cube.styl';
import * as t from './templates';
    export class Spin_Cube {

        html:HTMLElement;
        template:string;

        constructor(){

        this.template = t["cubi"];
        this.html = htmlParse(t["cubi"]);

            cubi.default;
        }
    }



