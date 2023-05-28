import { getAuth } from "firebase/auth"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import firestore from "../../../services/firebase"

export const getPoints = async (setPoints: (n:number)=>void) => {
  const authData = getAuth().currentUser?.uid
  const uid: string = authData ? authData : '' 
  const docRef = doc(firestore, 'users', uid)
  const docProm = await getDoc(docRef)

  if(docProm.exists()){
      const data = docProm.data()
      setPoints(data.points)
      localStorage.setItem(uid, data.points)
      window.addEventListener('storage', ()=>{
        const points = localStorage.getItem(uid) || ''
        setPoints(JSON.parse(points))
        updateDoc(docRef, {points: points})
        console.log('passou aq')
      })
  }
}