import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import styles from './index.module.scss'
import ImageList from './imageList'
import FiltersContainer from './FiltersContainer'

import { selectGamesListData } from '../../redux/gameList/selector'
import { AppDispatch } from '../../redux/store'
import { fetchGames } from '../../redux/gameList/actions'


const GamesContainer = () => {
    const dispatch = useDispatch<AppDispatch>()

    const {
        data: { groups, providers },
        showNumberOfColumns,
        filteredGames,
    } = useSelector(selectGamesListData)

    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <ImageList
                {...{
                    games: filteredGames,
                    showNumberOfColumns,
                }}
            />
            <FiltersContainer
                {...{ groups, providers, games: filteredGames }}
            />
        </div>
    )
}

export default GamesContainer
