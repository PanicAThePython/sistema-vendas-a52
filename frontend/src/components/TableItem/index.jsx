import { Button, FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import styled from "styled-components"

export const TableItem = () => {

    const items = [{
        "id": 1,
        "name": "produto 1",
        "price": 18.9,
        "quantity": 10,
    },
    {
        "id": 2,
        "name": "produto 2",
        "price": 22.53,
        "quantity": 11
    },
    {
        "id": 3,
        "name": "produto 3",
        "price": 54.9,
        "quantity": 3
    }]

    const [indexSelected, setIndexSelected] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const CustomButton = styled(Button)`
        border-radius: 50%;
        width: 10px;
        height: 10px;
    `

    useEffect(() => {
        setTotal(0)
        setQuantity(0)
    }, [indexSelected])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                        <TableCell>
                            <FormControl fullWidth>
                                <Select
                                    value={indexSelected}
                                    onChange={(e) => setIndexSelected(e.target.value)}
                                    displayEmpty
                                >
                                    {
                                        items.map(({ name }, index) => (
                                            <MenuItem value={index}>{name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell>{items[indexSelected].price}</TableCell>
                        <TableCell>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <CustomButton onClick={() => {
                                    setQuantity(quantity-1)
                                    setTotal((quantity-1) * items[indexSelected].price)
                                }} 
                                disabled={quantity===0}
                                >
                                    -
                                </CustomButton>
                                <Typography>{quantity}</Typography>
                                <CustomButton onClick={() => {
                                    setQuantity(quantity+1)
                                    setTotal((quantity+1) * items[indexSelected].price)
                                }} 
                                disabled={quantity === items[indexSelected].quantity}
                                >
                                    +
                                </CustomButton>
                            </div>
                        </TableCell>
                        <TableCell>{total.toFixed(2)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}