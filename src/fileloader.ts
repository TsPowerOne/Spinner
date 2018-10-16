import {Subject}from 'rxjs';
import {collToArray} from '@tspower/core';
import {Http} from '@tspower/http';

export class FileLoader{
    private node:HTMLInputElement;
    private clicked = new Subject<any>();
    private changed = new Subject<any>();
    private files:any = null;
    private http:Http = null;
    public clicked$ = this.clicked.asObservable();
    public changed$ = this.changed.asObservable();
    
    

    constructor(private Root:HTMLElement,
                private multiple?:boolean,
                private Id?:string, 
                private Class?:string, 
                private Style?:string)
    {
        this.http = new Http();
        this.create();
    }
    
    create = ()=>{
        let that = this;
        let input = document.createElement("input");
        input.setAttribute("type", "file");
        console.log(this.multiple);
        if(this.multiple)input.setAttribute("multiple", "multiple");

        input.addEventListener("click", (event)=>{
            this.clicked.next(true);
            
        });
        input.addEventListener("change", (event)=>{
            let target = event.target as HTMLInputElement;
            let files = target.files;
            this.files = collToArray(files as NodeListOf<any>);
            this.changed.next(this.files);
        });

        if(this.Id)input.setAttribute("id", this.Id);
        if(this.Class)input.setAttribute("class", this.Class);
        if(this.Style)input.setAttribute("style", this.Style);
        this.node = input;
        this.Root.appendChild(input);
    }
    send = async(url:string, inputName:string):Promise<any> =>{
        let Fdata = new FormData();
        Fdata.append(inputName, this.files[0]);
        return this.http.make({
            url:url,
            method:"POST",
            process:false,
            data:Fdata
        });
    }
}