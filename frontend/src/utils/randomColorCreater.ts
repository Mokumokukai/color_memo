import hello from 'hello-color';
import { ColorPair, IRandomColorProvider } from '../types'


export default class RandomColorCreater implements IRandomColorProvider {
    // eslint-disable-next-line
    getRandomColor(): ColorPair {
        let baseColor = "#"
        for (let i = 0; i < 6; i += 1) {
            // eslint-disable-next-line
            baseColor += "0123456789ABCDEF"[16 * Math.random() | 0]
        }
        const result = hello(baseColor).color;

        const colorpair: ColorPair = {
            id: -1,
            colors: [baseColor, result],
            owner_id: -1,
            creater_id: -1,
        }

        return colorpair;
    }
}


