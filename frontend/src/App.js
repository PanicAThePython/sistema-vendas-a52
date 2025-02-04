import { SaleInfoSection } from './components/SaleInfoSection'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { TableItem } from './components/TableItem'

const MainCustom = styled.main`
  display: flex;
  flex-direction: row;
  margin: auto 50px;
  justify-content: space-around;

  @media(max-width: 950px){
    flex-direction: column;
  }
`

const HeaderCustom = styled.header`
  height: 70px;
  width: 100%;
  background-color: #cecece;

  @media(max-width: 600px){
    width: 140%;
  }
`

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
