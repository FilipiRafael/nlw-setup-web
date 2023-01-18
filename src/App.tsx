import './styles/global.css';

import { Habit } from './components/Habit';

function App() {
  return (
    <>
      <Habit completed={10} />
      <Habit completed={50} />
      <Habit completed={100} />
    </>
  )
}

export default App
