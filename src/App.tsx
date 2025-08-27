import Navbar from './components/Navbar'
import { Box } from '@mui/material'
import Hero from './components/Hero'
import Cocktails from './components/Cocktail'
import About from './components/About'
import Art from './components/Art'

function App() {

  return (
    <Box>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </Box>
  )
}

export default App
