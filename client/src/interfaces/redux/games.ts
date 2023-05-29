import { IGame, IGameList, IGroup, IProvider } from './data'

export interface IGames {
    data: IGameList
    showNumberOfColumns: number
    gameSearchValue: string
    filteredGames: IGame[]
    selectedProvider: IProvider[]
    selectedGroups: IGroup[]
    sortingGamesValue:string
}
