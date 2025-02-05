import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"

export const PaymentMethodsSection = (props) => {
    const payments = props.data["payments"]
    const { selectPaymentMethod } = props
    const [value, setValue] = useState(payments[0].id)

    return (
        <FormControl>
            <Typography variant="body1">Selecione a forma de pagamento:</Typography>
            <Select
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    selectPaymentMethod(e.target.value)
                }}
                displayEmpty
            >
                {
                    (payments.length > 0) ? (
                        payments.map((payment) => (
                            <MenuItem key={payment.id} value={payment.id}>
                                {payment.installment}x no {payment.name}
                            </MenuItem>
                        ))
                    ) : (<></>)
                }
            </Select>
        </FormControl>
    )
}