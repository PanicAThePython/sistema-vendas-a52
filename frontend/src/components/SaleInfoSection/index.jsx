import { Typography } from "@mui/material"
import { PaymentMethodsSection } from "../PaymentMethodsSection"
import { CEPSection } from "../CEPSection"
import { AsideCustom } from "./style"

export const SaleInfoSection = (props) => {
    const {customer, payments, selectPaymentMethod} = props

    return (
        <AsideCustom>
            <Typography variant="h6">Olá, {customer[0].name}!</Typography>
            <CEPSection/>
            <PaymentMethodsSection data={payments} selectPaymentMethod={selectPaymentMethod}/>
        </AsideCustom>
    )
}