import React, {useState} from 'react'
import styles from './index.module.scss'
import SearchComponent from './Search/SearchComponent' 
import { useHistory } from "react-router-dom"




const HeaderComponent = props => {

    const history = useHistory()
    const [isHome, setIsHome] = useState(history.location.pathname === '/')

    return (
        <header className={styles.header} >
            <div
            onClick={() => {
                history.push(isHome ? '/auth' : '')
                setIsHome(!isHome)
            }}
            >
                minimalispics.
            </div>
            {isHome && (
                <SearchComponent
                onChange={value => {
                    props.onSearch(value)
                }}
                delay={1000}
                />
            )}
        </header>
    )
}

export default HeaderComponent