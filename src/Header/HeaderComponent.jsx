import React from 'react'
import styles from './index.module.scss'
import SearchComponent from './Search/SearchComponent' 

const HeaderComponent = props => {

    return (
        <header className={styles.header} >
            <div
            className={styles.header__title}
            >
                minimalispics.
            </div>
            <SearchComponent
            onChange={value => {
                props.onSearch(value)
            }}
            delay={1000}
            />
        </header>
    )
}

export default HeaderComponent