// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, bgClassName} = commentDetails
  const firstLetter = name.slice(0, 1).toUpperCase()
  const time = formatDistanceToNow(new Date())

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLiked ? 'liked-text' : ''

  const onClickLikeBtn = () => {
    toggleLike(id)
  }

  const onClickDeleteBtn = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="name-container">
        <p className={`first-letter ${bgClassName}`}>{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="time">{time}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="btn-container">
        <div className="like-container">
          <button
            onClick={onClickLikeBtn}
            className="like-btn"
            data-testid="like"
          >
            <img src={imgUrl} alt="like" className="like-img" />
          </button>
          <p className={`like-text ${likedText}`}>Like</p>
        </div>
        <button
          onClick={onClickDeleteBtn}
          className="delete-btn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
