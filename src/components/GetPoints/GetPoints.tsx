import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import firestore from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore"

const GetPoints = () => {
    const [points, setPoints] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const getData = async () =>{
            setIsLoading(true)
            const authData = getAuth().currentUser?.uid
            const uid: string = authData ? authData : '' 
            const docRef = doc(firestore, 'users', uid)
            const docProm = await getDoc(docRef)
            console.log(docProm.exists())

            if(docProm.exists()){
                const data = docProm.data()
                setPoints(data.points)
                setIsLoading(false)
            }
        }
        getData()
    },[])

    return (
        <div>
            <span>Pontos: {isLoading ? 'x' : points}</span>
        </div>
    )
}

export default GetPoints