console.log("Hello");

const func = (name:string) => {
    console.log(name.length);
}
func("Sergey");

interface ICar {
    name: string;
    model: string;
    engy?: number;
}

const car:ICar = {
    name: "Mitsybishi",
    model: "lancer",
    engy: 1.6
}

interface IBake<DATA> {
    name: string;
    data: DATA
}

const mustang:IBake<number> ={
    name: "mustang",
    data: 4,
}
const alpha:Partial<IBake<number>> ={
    data: 8
}

class Cars {
    private power: number;
    private name: string;
    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }

    getName(): string{
        return this.name;
    }
}