import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentList, setCommentList] = useState([])

  const updateName = e => {
    setName(e.target.value)
  }

  const updateComment = e => {
    setCommentText(e.target.value)
  }

  const addToList = e => {
    e.preventDefault()
    setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentList(prevState => [...prevState, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={addToList}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={updateName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={updateComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentList.map(each => (
        <CommentItem key={each.id} commentDetails={each} />
      ))}
    </CommentsContainer>
  )
}
export default Comments
