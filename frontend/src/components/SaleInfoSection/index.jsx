import { Typography } from "@mui/material"
import styled from "styled-components"
import { PaymentMethodsSection } from "../PaymentMethodsSection"
import { CEPSection } from "../CEPSection"


const AsideCustom = styled.aside`
    width: 450px;
    padding: 20px;
    padding-right: 0px;
    text-align: left;
`

export const SaleInfoSection = () => {
    return (
        <AsideCustom>
            <Typography variant="h6">Olá, Natália!</Typography>
            <CEPSection/>
            <PaymentMethodsSection/>
        </AsideCustom>
    )
}