import {useState} from "react";

const Header = ({title}) => <h1>{title}</h1>
const Button = ({name,clickHandler}) => {
  return (
      <button onClick={clickHandler}>
        {name}
      </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
      <tr>
          <td>{text}</td>
          <td>{value}</td>
      </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
    const all = good + neutral + bad

    if(all === 0) {
        return (
            <p>No feedback given</p>
        )
    } else {
        let positive = (good / all) * 100 ? (good / all) * 100 : 0
        const average = (good - bad) / all ? (good - bad) / all : 0

        return (
            <div>
                <table>
                    <tbody>
                        <StatisticLine text='good' value={good} />
                        <StatisticLine text='neutral' value={neutral} />
                        <StatisticLine text='bad' value={bad} />
                        <StatisticLine text='all' value={all} />
                        <StatisticLine text='average' value={average} />
                        <StatisticLine text='positive' value={positive} />
                    </tbody>
                </table>
            </div>
        )
    }
}

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  return (
    <div>
      <Header title='give feedback' />

      <Button name='good' clickHandler={ () => { setGood( good + 1 ) } } />
      <Button name='neutral' clickHandler={ () => { setNeutral( neutral + 1 ) } } />
      <Button name='bad' clickHandler={ () => { setBad( bad + 1 ) } } />

      <Header title='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
