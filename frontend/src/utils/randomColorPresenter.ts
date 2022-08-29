
import { ColorPair, IRandomColorProvider } from '../types'

export default class RandomColorPresenter {
    strategies: Array<IRandomColorProvider>;

    constructor(strategies: Array<IRandomColorProvider>) {
        this.strategies = strategies;
    }

    GetColors(num: number) {
        const colorPairs = new Array<ColorPair>();
        for (let i = 0; i < num; i += 1) {
            colorPairs.push(this.strategies[0].getRandomColor());
        }

        return colorPairs;

    }

}
