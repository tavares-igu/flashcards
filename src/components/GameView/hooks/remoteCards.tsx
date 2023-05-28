import { activate, fetchConfig, getValue } from "@firebase/remote-config"
import { remoteConfig } from "../../../services/firebase"

export const fetchCards = async () =>{
  const currentDate = new Date().getTime()
  const isExpired =  currentDate - remoteConfig.fetchTimeMillis > (24*60*60*1000)
  
  if(!localStorage.getItem('remoteCards') || isExpired){
    console.log('new cards fetch')

    fetchConfig(remoteConfig)
    activate(remoteConfig)

    const remoteCards = getValue(remoteConfig, 'cards')
    localStorage.setItem('remoteCards', remoteCards.asString())
  }

  return localStorage.getItem('remoteCards')
}