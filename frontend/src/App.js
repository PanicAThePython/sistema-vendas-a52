import { SaleInfoSection } from './components/SaleInfoSection'
import { ListItems } from './components/ListItems'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const MainCustom = styled.main`
  display: flex;
  flex-direction: row;
  margin: auto 20px;
  justify-content: space-between;
`

const HeaderCustom = styled.header`
  position: relative !important;
  display: flex;
  flex-direction: row;
  justifyContent: space-between;
  height: 70px;
  background-color: #cecece;
`

function App() {
  return (
    <div>
      <HeaderCustom/>
      <Typography variant='h5' margin={'20px'}>Resumo da Compra</Typography>
      <MainCustom>
        <ListItems/>
        <SaleInfoSection/>
      </MainCustom>
      <footer style={{display: 'flex', position: 'relative', float: 'right', margin: '10px'}}>
        <Button variant='contained' style={{ width: '420px', height: '70px', fontSize: '18px'}}>
          Finalizar compra
        </Button>
      </footer>
    </div>
  )
}

export default App
