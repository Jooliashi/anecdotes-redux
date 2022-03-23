import { connect } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/messageReducer'

const AnecdoteList = (props) => {
  const sortByVotes = (a, b) => {
    return a.votes - b.votes
  }

  const vote = (id, content) => {
    props.createVote(id)
    props.setNotification(`You voted ${content}`)
  }
  return (
    <div>
      {[...props.anecdotes]
        .sort(sortByVotes)
        .filter(a => a.content.match(props.filter))
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createVote,
  setNotification,
}
const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes