class Car {
    private brand : string;
    private speed : number;
    private model : string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    accelerator(value: number) {
        this.speed += value;
    }

    display() : void {
        console.log(`${this.brand} ${this.model} is running at a speed of ${this.speed} km/h`);
    }

}

export { Car};
 