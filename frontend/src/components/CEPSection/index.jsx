import { Button, TextField, Typography } from "@mui/material"

export const CEPSection = () => {
    return (
        <div>
            <Typography variant="body1">Informe o CEP:</Typography>
            <div style={{ display: 'flex'}}>
                <TextField placeholder="89000-000"/>
                <Button>OK</Button>
            </div>
            <Typography variant="overline">Rua dos Bobos, nº 0</Typography>
        </div>
    )
}