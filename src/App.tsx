import Navbar from './components/Navbar'
import { Box } from '@mui/material'
import Hero from './components/Hero'
import Cocktails from './components/Cocktail'
import About from './components/About'

function App() {

  return (
    <Box>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </Box>
  )
}

export default App
