/**
 * Interface for the Calculator
 */
export interface ICalculator {

    /**
     * Name of the Calculator
     */
    name:string;

    /**
     * Type of the Calculator
     */
    type:string;

    /**
     * Calculates something
     */
    calculate():number;
}