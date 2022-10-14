import { IDevMinimal } from "interfaces/IDevMinimal";
import React, { useEffect, useState } from "react";
import * as devService from "../../services/dev.service"


const DevCarousel : React.FC = () => {

    const [devs, setDevs] = useState<IDevMinimal[]>([]) 

    const getDevs =  async () => {

        const res = await devService.list({ limit : 15})

        setDevs(res.data)
    }

    useEffect(() => { getDevs() }, [])

    return (
        <div>
            {devs?.map((dev) => 
                <img src={dev.profilePicUrl} />
            )}
        </div>
    );
}

export default DevCarousel