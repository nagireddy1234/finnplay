import React from 'react'
import Header from "../../components/header"
import styles from './index.module.scss'
import GamesContainer from "../../components/gamesContainer"

const GameList = () => {
  return (
    <div className={styles.container} >
    <Header />
    <GamesContainer />
    </div>
  )
}

export default GameList