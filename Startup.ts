class Startup {
    constructor(){
        this.instanceMethod = function (params:any) {
            console.log('instanceMethod');
        }
    }
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
var a = new Startup();
a.instanceMethod();