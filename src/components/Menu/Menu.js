import React,{useState} from 'react'
import {Menu} from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './Menu.sass'
import * as Icons from '@ant-design/icons'






const Menus =({structure})=>{

    //
    
    const location = useLocation()


    //structure.indexOf(location.pathname.substr(1))
    

    const [defaultIndex] = useState(()=>{
        const elStructure=structure.find(el=>el.href===location.pathname.substr(1))
        const index=structure.indexOf(elStructure)
        return index
    })



    


    return (
       
        <Menu
          defaultSelectedKeys={[defaultIndex+'']}
          theme={'dark'}
        >

            {structure.map((value,i)=>{

                const Icon = React.createElement(Icons[value.icon])

                return (
                    <Menu.Item 
                        key={i} 
                        icon={Icon}>
    
                        <Link to={'/'+value.href}>{value.content}</Link>
                            
                    </Menu.Item>
                
                )
            })}

  
        </Menu>


    )



}
export default Menus