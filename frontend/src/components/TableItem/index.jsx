import { FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { CustomButton } from "./style"

export const TableItem = (props) => {
    const { products, selectProduct, setQuantitySale, setTotalSale } = props

    const [indexSelected, setIndexSelected] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(0)
        setQuantity(0)
        setTotalSale(0)
        setQuantitySale(0)
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
                                    onChange={(e) => {
                                        setIndexSelected(e.target.value)
                                        selectProduct(products["products"][e.target.value].id)
                                    }}
                                    displayEmpty
                                >
                                    {
                                        products["products"].map(({ name }, index) => (
                                            <MenuItem key={index} value={index}>{name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell>{products["products"][indexSelected].price}</TableCell>
                        <TableCell>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <CustomButton onClick={() => {
                                    setQuantity(quantity-1)
                                    setTotal((quantity-1) * products["products"][indexSelected].price)

                                    setQuantitySale(quantity-1)
                                    setTotalSale((quantity-1) * products["products"][indexSelected].price)
                                }} 
                                disabled={quantity===0}
                                >
                                    -
                                </CustomButton>
                                <Typography>{quantity}</Typography>
                                <CustomButton onClick={() => {
                                    setQuantity(quantity+1)
                                    setTotal((quantity+1) * products["products"][indexSelected].price)
                                    
                                    setQuantitySale(Math.abs(quantity+1))
                                    setTotalSale(Math.abs((quantity+1) * products["products"][indexSelected].price))
                                }} 
                                disabled={quantity === products["products"][indexSelected].quantity_of}
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