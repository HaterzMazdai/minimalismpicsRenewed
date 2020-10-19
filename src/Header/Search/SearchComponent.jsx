import React, {useState} from 'react'
import styles from './index.module.scss'
import {Input} from 'antd'
import {
  SearchOutlined
} from '@ant-design/icons';

const SearchComponent = props => {

	const [value, setValue] = useState('')


	// const initiateTimer = (func, delay, arg) => {
	// 	if (timerId) {
	// 		clearTimeout(timerId)
	// 	}
	// 	setTimerId(setTimeout(func, delay, arg))
	// }

	return (
		<Input
		className={styles.input}
		onPressEnter={ev => {
			props.onChange(value)
			console.log(1231231)
		}}
		onChange={ev => {
			setValue(ev.target.value)
		}}
		allowClear
		placeholder="Поиск по слову"
		suffix={
			<SearchOutlined 
			onClick={ev => {
				props.onChange(value)
			}} />
		}
		/>
	)
}

export default SearchComponent 