import { IGames } from '../../interfaces/redux/games'

export const setGroupAndProvider = (state: IGames) => {
    const gameIds: number[] = []
    state.selectedGroups.forEach(item => gameIds.push(...item.games))

    if (state.selectedProvider.length && state.selectedGroups.length) {
        const selectedGamesByProvider = state.data.games.filter(game =>
            state.selectedProvider.map(item => item.id).includes(game.provider),
        )

        const selectedGamesByGroupsProvider = selectedGamesByProvider.filter(
            game => gameIds.includes(game.id),
        )

        state.filteredGames = selectedGamesByGroupsProvider
    } else if (state.selectedProvider.length) {
        state.filteredGames = state.data.games.filter(game =>
            state.selectedProvider.map(item => item.id).includes(game.provider),
        )
    } else if (state.selectedGroups.length) {
        state.filteredGames = state.data.games.filter(game =>
            gameIds.includes(game.id),
        )
    } else {
        state.filteredGames = state.data.games
    }
}
