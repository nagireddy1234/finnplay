export interface IGameList {
    games: IGame[]
    providers: IProvider[]
    groups: IGroup[]
  }
  
  export interface IGame {
    id: number
    name: string
    provider: number
    cover: string
    coverLarge: string
    date: string
  }
  
  export interface IProvider {
    id: number
    name: string
    logo: string
  }
  
  export interface IGroup {
    id: number
    name: string
    games: number[]
  }

  export interface ISortingData{
    id: number
    name: string
  }
  