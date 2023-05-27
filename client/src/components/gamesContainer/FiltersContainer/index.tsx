import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Input from "../../common/input"
import { MenuIcon, SearchIcon } from "../../../assets/icons"
import { IGame, IGroup, IProvider } from '../../../interfaces/redux/data';
import ButtonList from "./buttonContainer";
import SortingData from "../../../data/sortingData";

interface IFiltersContainer {
  groups: IGroup[]
  providers: IProvider[]
  games: IGame[]
}

const FiltersContainer = ({ groups, providers, games }: IFiltersContainer) => {
  const [isShowFilters, setIsShowFilters] = useState(true)
  const showFilters = () => {
    setIsShowFilters(!isShowFilters);
  }
  useEffect(() => {
    const ele = document.getElementById('show-filters');
    if (ele) {
      ele.style.display = isShowFilters ? 'block' : 'none';
    }
  }, [isShowFilters])
  return (
    <div className={styles.container}>
      <Input placeholder='Search' type='text' value='' onChange={() => null} icon={<SearchIcon style={{ cursor: 'pointer' }} />} />
      <div className={styles.filtersContainer} onClick={showFilters}>
        <MenuIcon />
        <p>Show filters</p>
      </div>
      <div id='show-filters'>
        <div className={styles.buttonListContainer}>
          <ButtonList data={providers} label='Providers' />
          <ButtonList data={groups} label='Game groups' />
          <ButtonList data={SortingData} label='Sorting' />
        </div>
        <div className={styles.columnsContainer}>
          <p>Column</p>
          <div className={styles.dotContainer}>
            <div className={styles.dot}>2</div>
            <div className={styles.dot}>3</div>
            <div className={styles.dot}>4</div>
          </div>
        </div>
        <div className={styles.resetContainer}>
          <p>Games amount: <span> {games.length} </span></p>
          <button>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default FiltersContainer