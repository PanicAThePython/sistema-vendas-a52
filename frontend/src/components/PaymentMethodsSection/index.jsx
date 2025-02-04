import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react";

export const PaymentMethodsSection = () => {
    const [value, setValue] = useState(1)

    const payments = [{
        "id": 1,
        "name": "Cartão de Crédito",
        "installment": 10
    },
    {
        "id": 2,
        "name": "Cartão de Débito",
        "installment": 1
    }]

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