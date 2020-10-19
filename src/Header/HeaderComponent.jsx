import React from 'react'
import styles from './index.module.scss'
import SearchComponent from './Search/SearchComponent'
import translate from 'translate';  
import { message } from 'antd';



const HeaderComponent = props => {

    return (
        <header className={styles.header} >
            <div>
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