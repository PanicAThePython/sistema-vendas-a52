import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { api } from "../../services/api"

export const CEPSection = () => {
    const [cep, setCep] = useState("")
    const [address, setAddress] = useState(null)

    const handleClick = () => {
        api.get(`/cep/${cep}`).then((response) => {
            setAddress(response.data["address"])
        })
    }

    return (
        <div>
            <Typography variant="body1">Informe o CEP:</Typography>
            <div style={{ display: 'flex'}}>
                <TextField placeholder="89000-000" onChange={(e) => setCep(e.target.value)}/>
                <Button onClick={handleClick}>OK</Button>
            </div>
            {
                (address) ? (
                    <Typography variant="overline">
                        {address.street}, {address.neighborhood}, {address.city}, {address.state}, {address.code}
                    </Typography>
                ) : (
                    <div style={{height: "20px"}}></div>
                )
            }
            
        </div>
    )
}