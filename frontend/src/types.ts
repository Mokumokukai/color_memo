export type ColorPair = {
  id: number
  colors: string[]
  owner_id: number
  creater_id: number
}

export interface IRandomColorProvider {
  getRandomColor(): ColorPair
}
