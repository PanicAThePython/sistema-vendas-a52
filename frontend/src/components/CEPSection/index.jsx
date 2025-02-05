import { Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export const CEPSection = (props) => {
    const { restart } = props
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

    useEffect(() => {
        setAddress(null)
        setError(null)
    }, [restart])

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
                ) : (error) ? (
                    <Typography variant="overline" lineHeight={2}>{error}</Typography>
                ) : (
                    <div style={{height: "20px"}}></div>
                )
            }
        </div>
    )
}