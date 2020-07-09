import React,{useState} from 'react'
import { Switch, Route, Redirect} from "react-router-dom"








export const useRoutes = ({structure})=>{


    const [exact, setExact] = useState(null)
    



    return(

        <Switch>
            {structure.map((value,i)=>(
                <Route path={`/${value.href}`} exact key={i}>
                    <div>
                        {value.content}
                    </div>
                </Route>
            ))}
        </Switch>

    )

}


