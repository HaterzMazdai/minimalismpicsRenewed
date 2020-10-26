import React, {useState, useEffect} from 'react'
import styles from './index.module.scss'
import './override.scss'
import {Modal} from 'antd'

const PostComponent = props => {

  const [isModal, setModal] = useState(false);

  const post = props.post;

  



  useEffect(() => {
    const isMobile = window.innerWidth <= 960 ? true : false
    if (!isMobile) {
      const regular = new Image()
      regular.src = post.urls.regular
    }
  }, [post.urls.regular])

  return (
    <>
        <img alt="" key={post.id + props.index} src={post.urls.thumb} className={styles.post} 
        onClick={() => {          
            setModal(true)
        }}
        />
        <Modal
        visible={isModal}
        className={`${styles.postModal} post`}
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
            alt=""
            onClick={ev => {
              ev.stopPropagation()
            }}
            key={post.id + props.index} src={post.urls.regular} className={styles.postModal__img }/>
          </div>
        </Modal>
      </>
  )
}


export default PostComponent