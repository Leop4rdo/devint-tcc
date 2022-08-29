import Button from "components/utils/Button";
import Hello from "components/TelaLoguinWeb/index";
import Input from "components/utils/Input";
import React from "react";
import Icon from "components/utils/Icon";


const HomePage: React.FC = () => {

    return (
        <div className="home-page">
            <Hello name={''}/>

            {/* <Input icon="favorite" onChange={()=>{}} />

            <Button onClick={()=> {}}>
                <Icon name="bookmark"/>
                Favoritar
            </Button> */}
        </div>
    )
};

export default HomePage;