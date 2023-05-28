import { useEffect, useState } from 'react';
import './styles.css'
import { getAuth } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';

type CardProps = {
  "ptBr": string;
  "enUs": string;
}

const Card = ({ptBr, enUs}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardClass, setCardClass] = useState('cardContainer')
  const authData = getAuth().currentUser?.uid
  const uid: string = authData ? authData : '' 

  const onCardClick = () =>{
    if(isFlipped){
      alert('Você já acertou essa!')
      return
    }
    const answer = prompt('Qual o equivalente de ' + ptBr + ' em inglês?')
    const points = localStorage.getItem(uid) || ''
    if(answer?.toLowerCase() === enUs){
      setIsFlipped(!isFlipped)
      const newPoints = JSON.parse(points) + 1
      localStorage.setItem(uid, JSON.stringify(newPoints))
      window.dispatchEvent(new Event("storage"));
      alert('Parabéns! Você acertou!')
    }else{
      const newPoints = JSON.parse(points) - 1
      localStorage.setItem(uid, JSON.stringify(newPoints))
      window.dispatchEvent(new Event("storage"));
      alert('Você errou! :(')
    }
  }


  useEffect(()=>{
    if(isFlipped)
      setCardClass('cardContainer flipped')
    else
      setCardClass('cardContainer')
  },[isFlipped])

  return(
    <div className={cardClass} onClick={onCardClick}>
      <div className='cardBack'>{enUs}</div>
      <div className='cardFront'>{!isFlipped ? ptBr : ''}</div>
    </div>
  )
}

export default Card