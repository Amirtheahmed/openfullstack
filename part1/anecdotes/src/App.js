import { useState } from 'react'

const Header = ({text}) => {
  return (
      <h1>{text}</h1>
  )
}

const Button = ({text, clickHandler}) => {
  return (
      <button onClick={clickHandler}>
        {text}
      </button>

  )
}

const Stats = ({ votes }) => {
  return (
      <p>has {votes} votes</p>
  )
}

const getRandomAnecdote = (anecdotes) => {
  return Math.floor(Math.random() * (anecdotes.length - 0))
}

const ShowAnecdoteWithMostVotes = ({anecdotes, points}) => {
    const mostVoted = points.indexOf(Math.max(...points))
    if(points[mostVoted] !== 0) {
        return (
            <div>
                <p>{anecdotes[mostVoted]}</p>
                <Stats votes={points[mostVoted]} />
            </div>
        )
    }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [ points, setPoints ] = useState(Array(7).fill(0))
  const IncrementVote = () => {
      const copy = [ ...points ]
      copy[selected] += 1
      setPoints(copy)
  }


  return (
      <div>
          <Header text='Anecdote of the day' />
          <p>{anecdotes[selected]}</p>
          <Stats votes={points[selected]} />
          <Button text='vote' clickHandler={IncrementVote} />
          <Button text='random anecdote' clickHandler={() => { setSelected(getRandomAnecdote(anecdotes)) }} />
          <Header text='Anecdote with most votes' />
          <ShowAnecdoteWithMostVotes anecdotes={anecdotes} points={points} />
      </div>
  )
}

export default App