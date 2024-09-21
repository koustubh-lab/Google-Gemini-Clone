class Sample {
    constructor(name = "", roll = 0) {
        if (!name || !roll) return;
        this.name = name;
        this.roll = roll;
    }

    get getRollAndName() {
        return `Name: ${this.name}, Roll: ${this.roll}`;
    }
}

const sample = new Sample();
console.log(sample.getRollAndName);
