import React, {useState} from "react";
import SadBar from "components/shared/Feed/Sidebar"
import NavBar from "../NavBar"


const MenuWapper : React.FC = () => {

    const [sadbar, setSadBar] = useState(0)

    const steps = [
        { component: null },
        { component: <SadBar/> },
        
    ]

    const teste = () => {
       if(sadbar === 0){
        setSadBar(sadbar + 1)
       }else{
        setSadBar( sadbar - 1)
       }

    }

    return (
        <div className="container-global">
        <NavBar onClick={teste}/>
        
        {steps[sadbar].component}

          <div className="effect-side-bar">
          <SadBar/>  
            </div>  
           
        </div>
    )
}

export default MenuWapper