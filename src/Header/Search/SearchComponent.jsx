import React, {useState} from 'react'
import styles from './index.module.scss'
import {Input} from 'antd'
import {
  SearchOutlined
} from '@ant-design/icons';

const SearchComponent = props => {

	const [value, setValue] = useState('')


	return (
		<Input
		className={styles.input}
		onPressEnter={ev => {
			props.onChange(value)
		}}
		onChange={ev => {
			setValue(ev.target.value)
		}}
		allowClear
		placeholder="Search by word"
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