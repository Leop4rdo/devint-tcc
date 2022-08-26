import Hello from "components/Hello";
import Input from "components/Input";
import React from "react";



const HomePage : React.FC = () => {
    
    return (
        <div className="home-page">
            <Hello />
            
            <Input type="text" placeholder="input de teste" onChange={(e) => {}} />
        </div>
    )
};

export default HomePage;