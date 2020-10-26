import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Unsplash from 'unsplash-js';
import styles from './index.module.scss'
import PostComponent from './Post/PostComponent'
import ScrollButtonComponent from './ScrollButton/ScrollButtonComponent'


const HomeComponent = props => {
  

  
  const reduxState = useSelector(state => state)

  const unsplash = new Unsplash({ 
    accessKey: 'LuPHM_pd_YAH00c9ssorJV5fYEc0rvK9X0ST1oIFV_s',
    secret: 'dt3IVL8Qv1F-V8J8IZqoYcqQCil1FTkBp0cjBqakaVY',
    callbackUrl: 'https://haterzmazdai.github.io/minimalismpicsRenewed/auth'
  });

  const [isLoaded, setLoaded] = useState(false)

  const [isUpdating, setUpdating] = useState(false)

  const [page, setPage] = useState(1)

  const [isScrollTopVisible, setScrollTopVisible] = useState(false)

  const [firstColumn, setFirstColumn] = useState({
    posts: [],
    score: 0
  })

  const [secondColumn, setSecondColumn] = useState({
    posts: [],
    score: 0
  })

  const [thirdColumn, setThirdColumn] = useState({
    posts: [],
    score: 0
  })

  useEffect(() => {

    const searchValue = reduxState

    const args = searchValue 
      ? [searchValue, page, 30, 'latest']
      : [page, 30, 'lates']

    const load = async () => {
      unsplash[searchValue ? 'search' : 'photos'][searchValue ? 'photos' : 'listPhotos'](...args).then(res => {        
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Ошибка запроса')
        }
        
      }).then(data => {    
        const array = searchValue ? data.results : data;

 
        let firstScore = firstColumn.score || 0 
        let firstArr = firstColumn.posts || []

        let secondScore = secondColumn.score || 0 
        let secondArr = secondColumn.posts || []
        
        let thirdScore = thirdColumn.score || 0 
        let thirdArr = thirdColumn.posts || []

        

        array.forEach(post => {
          if ((firstScore < thirdScore && firstScore < secondScore) || firstScore === thirdScore || firstScore === secondScore) {
            firstScore = firstScore + post.height/post.width
            firstArr.push(post)
          } else if ((secondScore < firstScore && secondScore < thirdScore) || firstScore === thirdScore || firstScore === secondScore) {
            secondScore = secondScore + post.height/post.width
            secondArr.push(post)
          } else {
            thirdScore = thirdScore + post.height/post.width
            thirdArr.push(post)
          }
        })

        setFirstColumn({
          posts: firstArr,
          score: firstScore
        })

        setSecondColumn({
          posts: secondArr,
          score: secondScore
        })

        setThirdColumn({
          posts: thirdArr,
          score: thirdScore
        })
        
        setPage(page + 1)

        if (!isLoaded){
          setLoaded(true)
        }
        if (isUpdating) {
          setUpdating(false)
        }
      }).catch(e => {
        message.error('Что-то пошло не так')
        console.error(e)
      }) 
    }

    if (!isLoaded || isUpdating) {
      load()
    }
  }, [isLoaded, isUpdating])

  useEffect(() => {
    setFirstColumn({
      posts: [],      
      score: 0
    })

    setSecondColumn({
      posts: [],      
      score: 0
    })

    setThirdColumn({
      posts: [],
      score: 0
    })

    setPage(1)

    setLoaded(false)
  }, [reduxState])


  useEffect(() => {
    const root = window.document.getElementsByTagName('html')[0]
    let isVisible = false

    const listener = () => {
      if (root.scrollTop + root.clientHeight >= root.scrollHeight - 800) {
        setUpdating(true)
      }
      
      if (root.scrollTop >= 100 && !isVisible) {
        setScrollTopVisible(true)
        isVisible = true
      } else if (root.scrollTop < 100 && isVisible) {
        setScrollTopVisible(false)
        isVisible = false
      }
    }

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <> 
      {isScrollTopVisible ? (
        <ScrollButtonComponent/>
      ) : ""}
      {isLoaded ? (
        <div className={styles.main} >
          <div
            className={styles.column}
          >
            {firstColumn.posts.map((post, index) => {
              return (
                <PostComponent post={post} index={index} key={post.id + index}  />
              )
            })}
          </div>
          <div
            className={styles.column__center}
          >
            {secondColumn.posts.map((post, index) => {
              return (
                <PostComponent post={post} index={index} key={post.id + index}  />
              )
            })}
          </div>
          <div
            className={styles.column}
          >
            {thirdColumn.posts.map((post, index) => {
              return (
                <PostComponent post={post} index={index}  key={post.id + index} />
              )
            })}
          </div>
        </div>
      ) : (
          ""
        )}
    </>
  )
}


export default HomeComponent