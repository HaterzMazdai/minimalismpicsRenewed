import React from 'react';
import styles from './index.module.scss'


const ScrollButtonComponent = props => {



    return (
        <div
        className={styles.icon}
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }}
        />
    )
}

export default ScrollButtonComponent