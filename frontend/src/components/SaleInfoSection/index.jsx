import { Button, TextField, Typography } from "@mui/material"
import styled from "styled-components"
import { PaymentMethodsSection } from "../PaymentMethodsSection"


const AsideCustom = styled.aside`
    width: 550px;
    padding: 20px;
`

export const SaleInfoSection = () => {
    return (
        <AsideCustom>
            <Typography variant="h6">Olá, Natália!</Typography>
            <Typography variant="body1">Informe o CEP:</Typography>
            <div style={{ display: 'flex'}}>
                <TextField placeholder="89000-000"/><Button>OK</Button>
            </div>
            <Typography variant="overline">Rua dos Bobos, nº 0</Typography>
            <Typography variant="body1">Selecione a forma de pagamento:</Typography>
            <PaymentMethodsSection/>
        </AsideCustom>
    )
}