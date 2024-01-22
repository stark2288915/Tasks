console.log("Hello");
var func = function (name) {
    console.log(name.length);
};
func("Sergey");
var car = {
    name: "Mitsybishi",
    model: "lancer",
    engy: 1.6
};
var mustang = {
    name: "mustang",
    data: 4,
};
var alpha = {
    data: 8
};
var Cars = /** @class */ (function () {
    function Cars(name, power) {
        this.name = name;
        this.power = power;
    }
    Cars.prototype.getName = function () {
        return this.name;
    };
    return Cars;
}());
