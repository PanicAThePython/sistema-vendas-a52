import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"

export const PaymentMethodsSection = (props) => {
    const payments = props.data["payments"]
    const [value, setValue] = useState(payments[0].id)

    return (
        <FormControl>
            <Typography variant="body1">Selecione a forma de pagamento:</Typography>
            <Select
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                displayEmpty
            >
                {
                    payments.map((payment) => (
                        <MenuItem value={payment.id}>{payment.installment}x no {payment.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}