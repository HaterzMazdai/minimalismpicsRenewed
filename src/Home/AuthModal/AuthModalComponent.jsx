import React from 'react'
import {Modal} from 'antd'
import styles from './index.module.scss'
import './overrides.scss'


const AuthModalComponent = props => {

	return (
		<Modal
		visible={props.visible}
		className={`${styles.modal} + authModal`}
		centered
		destroyOnClose
		closable={false}
		onOk={props.onOk}
		onCancel={props.onCancel}
		okText="Go to Unsplash"
		cancelText="Decline"
		>
			<div className={styles.modal__text}>
				If you want to be able to like posts, you need to authorize&nbsp;on&nbsp;Unsplash
			</div>
		</Modal>
	)
}



export default AuthModalComponent