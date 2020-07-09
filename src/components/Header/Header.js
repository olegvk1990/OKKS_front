import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.sass'
import {Breadcrumbs} from 'antd'
import Emojilitics from './Emojilitics'






const Header = ({text}) =>{

    const [textOfHeader] = useState(text)


    const classes = {
        header: {
            self: 'header-desktop',
            containers: {
                inner: 'header-desktop-container inner'
            }
        },
        logo: 'header-logo',
        content: 'header-content'


    }




    return(

        <div className={classes.header.self}>
            <div className={classes.header.containers.inner}>
                <Link href='/' className={classes.logo}/>
                <div className={classes.content}>
                    <div className={classes.content+'_text'}>
                        <h1>{textOfHeader}</h1>
                    </div>
                    <div className={classes.content+'_bredcrumbs'}>
                        
                    </div>
                    <div className={classes.content+'_emojilitics'}>
                        {/* <Emojilitics/> */}
                    </div>
                    




                </div>
            </div>
        </div>
    )


}










export default Header