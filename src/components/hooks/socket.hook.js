import {useState, useCallback} from 'react'
import io from 'socket.io-client'


const SERVER = 'http://localhost:5000'

export const useSocket = () => {

    const [socket] = useState(getSocket(SERVER))
    const [appId,setAppId] = useState(null)
    const [cookie] = useState(getCookie())
    const [url] =useState(getUrlParams())

    //Инициализация приложения

    const initApp=useCallback(()=>{

            socket.on('init',data=>{
                const id = data.id
                if(!appId) {
                    setAppId(id)
                    socket.emit('init.new',{id,cookie,url})
                } else {
                    socket.emit('init.old',{id: appId,cookie,url})
                }
            })
    
    })


    
    
    return {
        initApp,
        socket
    }


}











function getSocket (server) {
    const socket = io(server)
    return socket
}




function getCookie () {

    let arr = document.cookie.split('; ')
    let cookie = {}
    arr.forEach(element=> {
      const z = element.split('=')
      cookie[z[0]]=z[1]
    })
  
    console.log('cookie',cookie)
    return cookie
}



function getUrlParams () {
        const queryString = window.location.search
        if(queryString) {
            let urlParams = queryString.split('?')
            if(urlParams.length>0) {
                urlParams = urlParams[1].split('&').map((value)=>{
                        const array = value.split('=')
                        return {
                            [array[0]]: array[1]
                        }
                })
            }
            console.log('urlParams',urlParams)
            return urlParams
        }
        return []
}