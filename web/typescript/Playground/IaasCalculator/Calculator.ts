import {ICalculator} from "./Interfaces/ICalculator";

/**
 * Calculator class
 */
export default class Calculator implements ICalculator {

    static staticArg:number = 666;

    nonStaticArg:number = 667;

    private nonStaticPrivateArg:number = 668;

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
        this.myPrivateFunction();
        return 6 * 6 * 2;
    }

    /**
     * Get's some info
     * @returns {string}
     */
    getInfo():string {
        return this.name + ' / ' + this.type;
    }

    static getPriceSign():string {
        return '€';
    }

    private myPrivateFunction():string {
        return this.name;
    }
}