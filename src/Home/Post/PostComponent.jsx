import React, {useState, useEffect} from 'react'
import styles from './index.module.scss'
import './override.scss'
import {Modal} from 'antd'

const PostComponent = props => {

  const [isModal, setModal] = useState(false);

  const post = props.post;


 

  useEffect(() => {
    const thumb = new Image()
    const regular = new Image()
    thumb.src = post.urls.thumb
    regular.src = post.urls.regular
  }, [])

  return (
    <>
        <img key={post.id + props.index} src={post.urls.thumb} className={styles.post} 
        onClick={() => {          
            setModal(true)
        }}
        />
        <Modal
        visible={isModal}
        className={styles.postModal + ' ' + 'modal'}
        centered
        width={820}
        closable={false}      
        onCancel={() => {
          setModal(false)
        }}
        footer={false}
        >
          <div
          onClick={() => {
            setModal(false)
          }}
          className={styles.postModal__container} >
            <img
            onClick={ev => {
              ev.stopPropagation()
              console.log(props.post)
            }}
            key={post.id + props.index} src={post.urls.regular} className={styles.postModal__img }/>
          </div>
        </Modal>
      </>
  )
}


export default PostComponent