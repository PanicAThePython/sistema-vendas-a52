import { SaleInfoSection } from './components/SaleInfoSection'
import { Button, CircularProgress, IconButton, Snackbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TableItem } from './components/TableItem'
import { HeaderCustom, MainCustom } from './style/style'
import { Fragment, useEffect, useState } from "react"
import { api } from "./services/api"

const App = () => {
  const [customer, setCustomer] = useState(null)
  const [products, setProducts] = useState(null)
  const [payments, setPayments] = useState(null)

  const [loaded, setLoaded] = useState(false)

  const [paymentMethodSelectedId, setPaymentMethodSelectedId] = useState(null)
  const [productSelectedId, setProductSelectedId] = useState(null)

  const [productSelectedQuantity, setProductSelectedQuantity] = useState(null)
  const [total, setTotal] = useState(null)

  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    if (!customer) {
      api.get("/customers").then((response) => {
        setCustomer(response.data["customers"])
        if (!products) {
          api.get("/products").then((response) => {
            setProducts(response.data)
			setProductSelectedId(response.data["products"][0].id)
            if (!payments) {
              api.get("/payments").then((response) => {
                setPayments(response.data)
				setPaymentMethodSelectedId(response.data["payments"][0].id)
                setLoaded(true)
              }).catch((e) => {
                console.error(e)
              })
            }
          }).catch((e) => {
            console.error(e)
          })
        }
      }).catch((e) => {
        console.error(e)
      })
    }
  }, [])

  const handleClick = () => {
    api.post('/sale', 
		{
			customerId: customer[0].cpf,
			productId: productSelectedId,
			quantityToRemove: productSelectedQuantity,
			paymentMethodId: paymentMethodSelectedId,
			total: total
		}
	).then(() => {
		setSuccessMessage("Compra finalizada com sucesso!")
    }).catch((error) => console.error(error))
  }

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSuccessMessage(null)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  if (!loaded) return <CircularProgress style={{ margin: '20% 48%'}}/>
  
  return (
    <div>
      	<HeaderCustom/>
      	<MainCustom>
        	<SaleInfoSection
				customer={customer}
				payments={payments}
				selectPaymentMethod={(id) => setPaymentMethodSelectedId(id)}
			/>
			<div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
				<Typography variant='h5' margin={'20px'}>
					Resumo da Compra
				</Typography>
				<TableItem
					products={products}
					selectProduct={(id) => setProductSelectedId(id)}
					setQuantitySale={(value) => setProductSelectedQuantity(value)}
					setTotalSale={(value) => setTotal(value)}
				/>
			</div>
      	</MainCustom>
		<footer>
			<Button
				variant='contained'
				style={{ width: '300px', height: '70px', fontSize: '18px', marginLeft: '70px'}}
				onClick={handleClick}
				disabled={productSelectedQuantity===0}
			>
				Finalizar compra
			</Button>
			<Snackbar
				open={(successMessage !== null)}
				autoHideDuration={5000}
				onClose={() => setSuccessMessage(null)}
				message={successMessage}
				action={action}
			/>
		</footer>
    </div>
  )
}

export default App
