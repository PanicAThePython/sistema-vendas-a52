import { Typography } from "@mui/material"
import { PaymentMethodsSection } from "../PaymentMethodsSection"
import { CEPSection } from "../CEPSection"
import { AsideCustom } from "./style"

export const SaleInfoSection = () => {
    return (
        <AsideCustom>
            <Typography variant="h6">Olá, Natália!</Typography>
            <CEPSection/>
            <PaymentMethodsSection/>
        </AsideCustom>
    )
}