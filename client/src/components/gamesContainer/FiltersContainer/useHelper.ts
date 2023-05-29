import { useEffect, useState } from 'react'
import {
    filterGames,
    filterGroups,
    filterProvider,
    setShowNumberOfColumns,
    setsortingGameValue,
} from '../../../redux/gameList/actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectGamesListData } from '../../../redux/gameList/selector'
import { IGroup, IProvider } from '../../../interfaces/redux/data'

export const useHelper = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [isShowFilters, setIsShowFilters] = useState(true)
    const { gameSearchValue, selectedProvider, selectedGroups, sortingGamesValue } =
        useSelector(selectGamesListData)

    const showFilters = () => {
        setIsShowFilters(!isShowFilters)
    }

    useEffect(() => {
        const ele = document.getElementById('show-filters')
        if (ele) {
            ele.style.display = isShowFilters ? 'block' : 'none'
        }
    }, [isShowFilters])

    const handleShowNumberOfColumns = (n: number) => {
        dispatch(setShowNumberOfColumns(n))
    }

    const handleSearchGames = (value: string) => {
        dispatch(filterGames(value))
    }

    const handleProviderSelection = (data: IProvider) => {
        dispatch(filterProvider(data))
    }

    const handleGroupSelection = (data: IGroup) => {
        dispatch(filterGroups(data))
    }

    const handleSortingSelection = (value:string) =>{
        dispatch(setsortingGameValue(value))
    }

    return {
        consts: {
            isShowFilters,
            gameSearchValue,
            selectedProvider,
            selectedGroups,
            sortingGamesValue
        },
        funcs: {
            showFilters,
            handleShowNumberOfColumns,
            handleSearchGames,
            handleProviderSelection,
            handleGroupSelection,
            handleSortingSelection
        },
    }
}
