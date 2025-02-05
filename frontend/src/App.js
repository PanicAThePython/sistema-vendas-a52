import { SaleInfoSection } from './components/SaleInfoSection'
import { Button, CircularProgress, IconButton, Snackbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Cart } from './components/Cart'
import { HeaderCustom, MainCustom, CustomDiv } from './style/style'
import { Fragment, useEffect, useState } from "react"
import { api } from "./services/api"

const App = () => {
  const [customer, setCustomer] = useState(null)
  const [products, setProducts] = useState(null)
  const [payments, setPayments] = useState(null)

  const [loaded, setLoaded] = useState(false)
  const [restart, setRestart] = useState(false)

  const [paymentMethodSelectedId, setPaymentMethodSelectedId] = useState(null)
  const [productSelectedId, setProductSelectedId] = useState(null)

  const [productSelectedQuantity, setProductSelectedQuantity] = useState(null)
  const [total, setTotal] = useState(null)

  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (!customer) {
      api.get("/customers").then((response) => {
        setCustomer(response.data["customers"])
        if (!products) {
          api.get("/products").then((response) => {
            setProducts(response.data["products"])
			      setProductSelectedId(response.data["products"][0].id)
            if (!payments) {
              api.get("/payments").then((response) => {
                setPayments(response.data["payments"])
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

  useEffect(() => {
    if (productSelectedId !== null && paymentMethodSelectedId != null){
      setProductSelectedId(products[0].id)
      setPaymentMethodSelectedId(payments[0].id)
    }
  }, [restart])

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
      setMessage("Compra finalizada com sucesso!")
      setRestart(!restart)
    })
    .catch(() => setMessage("Houve um problema com a compra, tente novamente..."))
  }

  const action = (
    <Fragment>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => setMessage(null)}
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
            restart={restart}
            customer={customer}
            payments={payments}
            selectPaymentMethod={(id) => setPaymentMethodSelectedId(id)}
          />
          <CustomDiv>
            <Typography variant='h5' margin={'20px'}>
              Resumo da Compra
            </Typography>
            <Cart
              restart={restart}
              products={products}
              selectProduct={(id) => setProductSelectedId(id)}
              setQuantitySale={(value) => setProductSelectedQuantity(value)}
              setTotalSale={(value) => setTotal(value)}
            />
          </CustomDiv>
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
            open={(message !== null)}
            autoHideDuration={5000}
            onClose={() => setMessage(null)}
            message={message}
            action={action}
          />
        </footer>
    </div>
  )
}

export default App
