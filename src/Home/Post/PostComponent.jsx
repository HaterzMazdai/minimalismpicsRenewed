import React, {useState, useEffect} from 'react'
import styles from './index.module.scss'
import './override.scss'
import {Modal} from 'antd'
import LikeButtonComponent from './LikeButton/LikeButtonComponent'

const PostComponent = props => {

  const [isPostVisible, setPostVisible] = useState(false);

  const [isFooterVisible, setFooterVisible] = useState(false)

  

  const post = props.post;

  const liked = post.liked_by_user

  
  const isMobile = window.innerWidth <= 960 ? true : false


  useEffect(() => {
    if (!isMobile) {
      const regular = new Image()
      regular.src = post.urls.regular
      regular.onload = () => {
        setFooterVisible(true)
      }
    }
  }, [post.urls.regular])

  return (
    <>
        <img alt="" key={post.id + props.index} src={post.urls.thumb} className={styles.post} 
        onClick={() => {          
            setPostVisible(true)
            if (isMobile) {
              setFooterVisible(true)
            }
        }}
        />
        <Modal
        visible={isPostVisible}
        className={`${styles.postModal} post`}
        centered
        destroyOnClose
        width={820}
        closable={false}      
        onCancel={() => {
          setPostVisible(false)
        }}
        footer={false}
        >
          <div
          onClick={() => {
            setPostVisible(false)
          }}
          className={styles.postModal__container} >
            <img
            alt=""
            onClick={ev => {
              ev.stopPropagation()
            }}
            key={post.id + props.index} src={post.urls.regular} className={styles.postModal__img }/>
            <div className={isFooterVisible ? styles.footer__visible  :  styles.footer}
            onClick={ev => {
              ev.stopPropagation()
            }}
            >
              <div className={styles.likesContainer} >
                <LikeButtonComponent
                liked={liked}
                onClick={() => {
                  const token = window.localStorage.getItem('access_token')
                  if (token) {
                    if (liked) {
                      props.dislikePost(post.id, () => {
                        props.setPost(false, post.likes - 1)
                      }, token)
                    } else {
                      props.likePost(post.id, () => {
                        props.setPost(true, post.likes + 1)
                      }, token)
                    }
                  } else {
                    props.setAuthModalVisible(true)
                  }
                }}
                />
                <div className={`${styles.likesContainer__count} ${liked ? styles.likesContainer__count__liked : ''}`} >
                  {post.likes}
                </div>
              </div>

              <div className={styles.authorContainer} >
                by &nbsp; <a target="_blank" href={post.links.html} >{post.user.name}</a> &nbsp; on &nbsp; <a href="https://unsplash.com/" target="_blank" >Unsplash</a>
              </div>
            </div>
          </div>
        </Modal>
      </>
  )
}


export default PostComponent