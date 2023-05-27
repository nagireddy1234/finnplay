import React from 'react'
import styles from './index.module.scss';
import ImageList from "./imageList";
import FiltersContainer from "./FiltersContainer";
import { useSelector } from "react-redux";
import { selectGamesList } from "../../redux/gameList/selector";

type Props = {}



const GamesContainer = (props: Props) => {
  const data = useSelector(selectGamesList)
  console.log(data, "datatatat")
  const { games, groups, providers } = data.data;
  return (
    <div className={styles.container}>
      <ImageList {...{games}}/>
      <FiltersContainer {...{groups, providers,games}} />
    </div>
  )
}

export default GamesContainer