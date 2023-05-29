import { createReducer } from '@reduxjs/toolkit'
import {
    fetchGames,
    filterGames,
    filterGroups,
    filterProvider,
    setShowNumberOfColumns,
    setsortingGameValue,
} from './actions'
import { IGames } from '../../interfaces/redux/games'
import { IGroup, IGame } from '../../interfaces/redux/data'

const initialState: IGames = {
    data: {
        games: [],
        groups: [],
        providers: [],
    },
    gameSearchValue: '',
    showNumberOfColumns: 4,
    filteredGames: [],
    selectedProvider: [],
    selectedGroups: [],
    sortingGamesValue: '',
}

const gamesReducer = createReducer(initialState, games => {
    games.addCase(fetchGames.fulfilled, (state, { payload }) => {
        const { groups, games, providers } = payload
        const gamesIdFromGrops: number[] = []
        groups.forEach(({ games }: IGroup) => gamesIdFromGrops.push(...games))
        const filteredGames = games.filter((game: IGame) =>
            gamesIdFromGrops.includes(game.id),
        )
        state.data.games = payload.games
        state.data.groups = payload.groups
        state.data.providers = payload.providers

        state.data = { games: filteredGames, groups, providers }
        state.filteredGames = filteredGames
    })

    games.addCase(setShowNumberOfColumns, (state, { payload }) => {
        state.showNumberOfColumns = payload
    })

    games.addCase(filterGames, (state, { payload }) => {
        state.gameSearchValue = payload
        state.filteredGames = state.data.games.filter(
            game =>
                game.name
                    .toLocaleLowerCase()
                    .indexOf(state.gameSearchValue.toLocaleLowerCase()) > -1,
        )
    })

    games.addCase(filterProvider, (state, { payload }) => {
        const index = state.selectedProvider.findIndex(
            item => item.name === payload.name,
        )

        if (index === -1) {
            state.selectedProvider.push(payload)
        } else {
            state.selectedProvider.splice(index, 1)
        }

        const gameIds: number[] = []
        state.selectedGroups.forEach(item => gameIds.push(...item.games))

        if (state.selectedProvider.length && state.selectedGroups.length) {
            const selectedGamesByProvider = state.data.games.filter(game =>
                state.selectedProvider
                    .map(item => item.id)
                    .includes(game.provider),
            )

            const selectedGamesByGroupsProvider =
                selectedGamesByProvider.filter(game =>
                    gameIds.includes(game.id),
                )

            state.filteredGames = selectedGamesByGroupsProvider
        } else if (state.selectedProvider.length) {
            state.filteredGames = state.data.games.filter(game =>
                state.selectedProvider
                    .map(item => item.id)
                    .includes(game.provider),
            )
        } else if (state.selectedGroups.length) {
            state.filteredGames = state.data.games.filter(game =>
                gameIds.includes(game.id),
            )
        } else {
            state.filteredGames = state.data.games
        }
    })

    games.addCase(filterGroups, (state, { payload }) => {
        const index = state.selectedGroups.findIndex(
            item => item.name === payload.name,
        )

        if (index === -1) {
            state.selectedGroups.push(payload)
        } else {
            state.selectedGroups.splice(index, 1)
        }

        const gameIds: number[] = []
        state.selectedGroups.forEach(item => gameIds.push(...item.games))

        if (state.selectedProvider.length && state.selectedGroups.length) {
            const selectedGamesByProvider = state.data.games.filter(game =>
                state.selectedProvider
                    .map(item => item.id)
                    .includes(game.provider),
            )

            const selectedGamesByGroupsProvider =
                selectedGamesByProvider.filter(game =>
                    gameIds.includes(game.id),
                )

            state.filteredGames = selectedGamesByGroupsProvider
        } else if (state.selectedProvider.length) {
            state.filteredGames = state.data.games.filter(game =>
                state.selectedProvider
                    .map(item => item.id)
                    .includes(game.provider),
            )
        } else if (state.selectedGroups.length) {
            state.filteredGames = state.data.games.filter(game =>
                gameIds.includes(game.id),
            )
        } else {
            state.filteredGames = state.data.games
        }
    })

    games.addCase(setsortingGameValue, (state, { payload }) => {
        state.sortingGamesValue = payload
        state.filteredGames = state.data.games.sort(
            (game1: IGame, game2: IGame) => {
                if (payload.toLowerCase() === 'a-z') {
                    return game1.name.localeCompare(game2.name)
                } else if (payload.toLowerCase() === 'z-a') {
                    return game2.name.localeCompare(game1.name)
                } else if (payload.toLowerCase() === 'newest') {
                    return Number(new Date(game2.date)) - Number(new Date(game1.date))
                }
            },
        )
        console.log( state.filteredGames," state.filteredGames")
    })
})

export default gamesReducer
