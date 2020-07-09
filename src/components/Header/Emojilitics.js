import React from 'react';
import Emoji from "react-emoji-render"








const Emojilitics = () => {
    const classes = {
        icon: 'emojilitics-icon',
        content: 'emojilitics-content',
        item: 'emojilitics-item',
        container: 'emojilitics-container'
    }

    const analitics = [
        {
            name: '😄',
            content: 1456,
            desc: 'Воспользовались услугой'
        },{
            name: '🤔',
            content: 121,
            desc: 'В процессе'
        },{
            name: '💼',
            content: 84,
            desc: 'Предложений по услуге'
        },{
            name: '📍',
            content: 'Москва',
            desc: 'Ваше местоположение'
        }
    ]



    return(






        <div className={classes.container}>
            {analitics.map(value=>{
                return(      
                    <Emoji text={' '+value.content+' '+value.name} onlyEmojiClassName={classes.icon}/>
                )
            
            
            })}

            

        </div>




    )

}






export default Emojilitics