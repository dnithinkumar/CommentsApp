import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    bgClassName: '',
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const bgClassName =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      bgClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length

    return (
      <div className="comments-bg-container">
        <div className="comments-app-container">
          <h1 className="comment-heading">Comments</h1>
          <p className="comment-description">
            Say something about 4.0 Technologies
          </p>
          <div className="form-img-container">
            <form className="form-container" onSubmit={this.addComment}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
                className="name-input"
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                className="comment-input"
                value={comment}
              >
                {' '}
              </textarea>
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="hr-line" />
          <p className="comments-count">
            <span className="count">{count}</span>Comments
          </p>
          <ul className="comment-items-container">
            {commentsList.map(eachItem => (
              <CommentItem
                commentDetails={eachItem}
                key={eachItem.id}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
