import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/shared/SideBar/SideBar.jsx';
import HackerNews from './components/HackerNews/HackerNews.jsx';
import Reddit from './components/Reddit/Reddit.jsx';
import Medium from './components/Medium/Medium.jsx';
import Pokemon from './components/Pokemon/Pokemon.jsx';
import PokemonDetail from './components/Pokemon/PokemonDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/hacker-news" element={<HackerNews />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/reddit" element={<Reddit />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
