import Navbar from './components/Navbar'
import { Box } from '@mui/material'
import Hero from './components/Hero'

function App() {

  return (
    <Box>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black' />
    </Box>
  )
}

export default App
