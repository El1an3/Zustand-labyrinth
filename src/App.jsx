import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Game } from './components/Game'

export const App = () => {
  return (
    // creted some routes to navigate to different pages
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
