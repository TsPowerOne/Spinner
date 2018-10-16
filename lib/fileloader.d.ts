export declare class FileLoader {
    private Root;
    private multiple?;
    private Id?;
    private Class?;
    private Style?;
    private node;
    private clicked;
    private changed;
    private files;
    private http;
    clicked$: import("rxjs/internal/Observable").Observable<any>;
    changed$: import("rxjs/internal/Observable").Observable<any>;
    constructor(Root: HTMLElement, multiple?: boolean, Id?: string, Class?: string, Style?: string);
    create: () => void;
    send: (url: string, inputName: string) => Promise<any>;
}
