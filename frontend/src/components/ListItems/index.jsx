import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"

export const ListItems = () => {

    const items = [{
        "id": 1,
        "name": "produto 1",
        "price": 18.9,
        "quantity": 2,
    },
    {
        "id": 2,
        "name": "produto 2",
        "price": 18.9,
        "quantity": 1
    },
    {
        "id": 3,
        "name": "produto 3",
        "price": 18.9,
        "quantity": 4
    }]

    let total = 0
    items.forEach(item => {
        total += item.price*item.quantity
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    {item.quantity}
                                </TableCell>
                                <TableCell>{item.price * item.quantity}</TableCell>
                            </TableRow>
                        )
                    )
                    }
                </TableBody>
            </Table>
            <TableFooter style={{ float: 'right', fontSize: '24px', margin: '20px'}}>
                Total: R$ {total.toFixed(2)}
            </TableFooter>
        </TableContainer>
    )
}