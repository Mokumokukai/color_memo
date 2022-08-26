declare module 'hello-color'{
    declare type helloColor ={
        base :string;
        color: string;
        contrast: string;
        dark: boolean;
        scale: Array<string>;
        hues: Array<string>;
    };
    function hello(base: string, options?: {}): helloColor;
    export = hello
}
