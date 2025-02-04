import { SaleInfoSection } from './components/SaleInfoSection'
import { Button, Typography } from '@mui/material'
import { TableItem } from './components/TableItem'
import { HeaderCustom, MainCustom } from './style/style'

function App() {
  return (
    <div>
      <HeaderCustom/>
      <MainCustom>
      <SaleInfoSection/>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <Typography variant='h5' margin={'20px'}>Resumo da Compra</Typography>
          <TableItem/>
        </div>
      </MainCustom>
      <footer>
        <Button variant='contained' style={{ width: '300px', height: '70px', fontSize: '18px', marginLeft: '70px'}}>
          Finalizar compra
        </Button>
      </footer>
    </div>
  )
}

export default App
