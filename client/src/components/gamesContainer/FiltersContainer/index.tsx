import React from 'react'
import styles from './index.module.scss'
import Input from '../../common/input'
import { MenuIcon, SearchIcon } from '../../../assets/icons'
import { IGame, IGroup, IProvider } from '../../../interfaces/redux/data'
import ButtonList from './buttonContainer'
import SortingData from '../../../data/sortingData'
import { useHelper } from './useHelper'

interface IFiltersContainer {
    groups: IGroup[]
    providers: IProvider[]
    games: IGame[]
}

const FiltersContainer = ({ groups, providers, games }: IFiltersContainer) => {
    const {
        consts: {
            isShowFilters,
            gameSearchValue,
            selectedProvider,
            selectedGroups,
        },
        funcs: {
            showFilters,
            handleShowNumberOfColumns,
            handleSearchGames,
            handleProviderSelection,
            handleGroupSelection,
            handleSortingSelection
        },
    } = useHelper()

    return (
        <div className={styles.container}>
            <Input
                placeholder="Search"
                type="text"
                value={gameSearchValue}
                onChange={e => handleSearchGames(e.target.value)}
                icon={
                    <SearchIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => null}
                    />
                }
            />
            {!isShowFilters && (
                <div className={styles.filtersContainer} onClick={showFilters}>
                    <MenuIcon />
                    <p>Show filters</p>
                </div>
            )}
            <div id="show-filters">
                <div className={styles.buttonListContainer}>
                    <ButtonList
                        data={providers}
                        label="Providers"
                        nameList={selectedProvider?.map(item => item.name)}
                        onClick={item =>
                            handleProviderSelection(item as IProvider)
                        }
                    />
                    <ButtonList
                        data={groups}
                        label="Game groups"
                        nameList={selectedGroups.map(item => item.name)}
                        onClick={item => handleGroupSelection(item as IGroup)}
                    />
                    <ButtonList
                        data={SortingData}
                        label="Sorting"
                        onClick={item => handleSortingSelection(item.name)}
                    />
                </div>
                <div className={styles.columnsContainer}>
                    <p>Column</p>
                    <div className={styles.dotContainer}>
                        <div
                            className={styles.dot}
                            onClick={() => handleShowNumberOfColumns(2)}
                        >
                            2
                        </div>
                        <div
                            className={styles.dot}
                            onClick={() => handleShowNumberOfColumns(3)}
                        >
                            3
                        </div>
                        <div
                            className={styles.dot}
                            onClick={() => handleShowNumberOfColumns(4)}
                        >
                            4
                        </div>
                    </div>
                </div>
                <div className={styles.resetContainer}>
                    <p>
                        Games amount: <span> {games.length} </span>
                    </p>
                    <button>Reset</button>
                </div>
            </div>
            {isShowFilters && (
                <div className={styles.filtersContainer} onClick={showFilters}>
                    <MenuIcon />
                    <p>hide filters</p>
                </div>
            )}
        </div>
    )
}

export default FiltersContainer
