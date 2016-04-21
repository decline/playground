import {ICalculator} from "./Interfaces/ICalculator";

/**
 * Calculator class
 */
export class Calculator implements ICalculator {

    /**
     * The Constructor
     * @param name
     * @param type
     */
    constructor(private name:string, private type:string) {

    }

    /**
     * Calculates something
     * @returns {number}
     */
    calculate():number {
        return 6 * 6;
    }

    /**
     * Get's some info
     * @returns {string}
     */
    getInfo():string {
        return this.name + ' / ' + this.type;
    }
}