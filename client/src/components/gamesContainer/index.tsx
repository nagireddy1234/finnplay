import React from 'react'
import styles from './index.module.scss';
import ImageList from "./imageList";
import FiltersContainer from "./FiltersContainer";

type Props = {}

const GamesContainer = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
    {/* <div className={styles.imageContainer}>
        <p>games container component</p>
    </div> */}
    <ImageList />
    {/* <div className={styles.filtersContainer}>
        <p>filter container component</p>
    </div> */
    }
    <FiltersContainer />
    </div>
  )
}

export default GamesContainer