import {message} from 'antd'


export const setPost = (posts, post, liked, likes) => {
	const newPost = {
		...post,
		liked_by_user: liked,
		likes
	}

	posts.splice(posts.indexOf(post), 1, newPost)
	return posts
}

export const lazyErrorHandle = (e) => {
	console.error(e)
	message.error('Something went wrong')
}