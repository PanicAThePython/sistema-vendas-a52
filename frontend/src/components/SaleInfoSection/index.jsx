import { Typography } from "@mui/material"
import { PaymentMethodsSection } from "../PaymentMethodsSection"
import { CEPSection } from "../CEPSection"
import { AsideCustom } from "./style"

export const SaleInfoSection = (props) => {
    const {customer, payments, selectPaymentMethod, restart} = props

    return (
        <AsideCustom>
            <Typography variant="h6">Olá, {customer[0].name}!</Typography>
            <CEPSection restart={restart}/>
            <PaymentMethodsSection
                restart={restart}
                payments={payments}
                selectPaymentMethod={selectPaymentMethod}
            />
        </AsideCustom>
    )
}