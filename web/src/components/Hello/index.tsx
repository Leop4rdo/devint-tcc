import React from "react";

interface IHelloProps {
    name?: string;
}

const Hello : React.FC<IHelloProps> = ({name}) => {

    return (
        <div className="hello-container">
            <h2>Hello { name || "world" }!</h2>
            <p>This is a react component</p>
        </div>
    )
}

export default Hello