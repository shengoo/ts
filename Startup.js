var Startup = (function () {
    function Startup() {
        this.instanceMethod = function (params) {
            console.log('instanceMethod');
        };
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.instanceMethod();
var a = new Startup();
a.instanceMethod();
//# sourceMappingURL=Startup.js.map