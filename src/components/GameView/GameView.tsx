import { useEffect, useState } from 'react'
import { fetchCards } from './hooks/remoteCards'
import Card from './components/Card/Card'
import './styles.css'

const GameView = () => {
  const [remoteCards, setRemoteCards] = useState({"cards":[]})
  useEffect(()=>{
    fetchCards()
    const string = localStorage.getItem('remoteCards') || ''
    setRemoteCards(JSON.parse(string))
  },[])
  const ptBr: Array<string> = remoteCards.cards.map((i)=>i["pt_br"])
  const enUs: Array<string> = remoteCards.cards.map((i)=>i["en_us"])

  return(
    <div className='gameView'>
      <div className='allCards'>
        {
          ptBr.map((i, index)=>{
            return <Card key={index} ptBr={i} enUs={enUs[index]}/>
          })
        }
      </div>
    </div>
  )
}

export default GameView