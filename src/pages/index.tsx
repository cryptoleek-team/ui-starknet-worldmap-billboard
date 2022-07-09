import type { NextPage } from 'next'
import Head from 'next/head'
import Mapbox from '../components/Map/Mapbox'
import WalletConnect from '../components/WalletConnect'
import { Box } from '@mui/system'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Map Billboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{
          height: '100vh',
          maxWidth: "1440px",
          margin: "0 auto",
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <h1>Starknet World Map Billboard</h1>
            <WalletConnect />
          </Box>
          <Mapbox />
        </Box>

      </main>
    </div >
  )
}

export default Home
