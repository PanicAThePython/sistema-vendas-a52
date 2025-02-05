import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { api } from "../../services/api"

export const CEPSection = () => {
    const [cep, setCep] = useState("")
    const [address, setAddress] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        api.get(`/cep/${cep}`).then((response) => {
            setAddress(response.data["address"])
        }).catch(() => {
            setError("CEP não cadastrado ou inválido")
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
                    <Typography variant="overline" lineHeight={2}>
                        {address.street}, {address.neighborhood}, {address.city}, {address.state}, {address.code}
                    </Typography>
                ) : (error) ? (<div>{error}</div>): (
                    <div style={{height: "20px"}}></div>
                )
            }
            
        </div>
    )
}