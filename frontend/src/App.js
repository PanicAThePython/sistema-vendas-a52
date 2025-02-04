import { SaleInfoSection } from './components/SaleInfoSection'
import { Button, CircularProgress, Typography } from '@mui/material'
import { TableItem } from './components/TableItem'
import { HeaderCustom, MainCustom } from './style/style'
import { useEffect, useState } from "react"
import { api } from "./services/api"

const App = () => {
  const [customer, setCustomer] = useState(null)
  const [products, setProducts] = useState(null)
  const [payments, setPayments] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!customer) {
      api.get("/customers").then((response) => {
        setCustomer(response.data)
      }).catch((e) => {
        console.error(e)
      })
      if (!products) {
        api.get("/products").then((response) => {
          setProducts(response.data)
        }).catch((e) => {
          console.error(e)
        })
        if (!payments) {
          api.get("/payments").then((response) => {
            setPayments(response.data)
            setLoaded(true)
          }).catch((e) => {
            console.error(e)
          })
        }
      }
    }
  }, [])

  const handleClick = () => {
    api.post('/sale', {
      // colocar as infos
    }).then(() => {

    })
  }

  if (!loaded) return <CircularProgress style={{ margin: '20% 48%'}}/>
  
  return (
    <div>
      <HeaderCustom/>
      <MainCustom>
      <SaleInfoSection customer={customer["customers"]} payments={payments}/>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <Typography variant='h5' margin={'20px'}>Resumo da Compra</Typography>
          <TableItem products={products}/>
        </div>
      </MainCustom>
      <footer>
        <Button
          variant='contained'
          style={{ width: '300px', height: '70px', fontSize: '18px', marginLeft: '70px'}}
          onClick={handleClick}
        >
          Finalizar compra
        </Button>
      </footer>
    </div>
  )
}

export default App
