import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ImportPage from './pages/ImportPage.jsx'
import HthPage from './pages/HthPage.jsx'
import GencoPage from './pages/GencoPage.jsx'
import DomclorPage from './pages/DomclorPage.jsx'
import HidroazulPage from './pages/HidroazulPage.jsx'
import NeoclorPage from './pages/NeoclorPage.jsx'
import NetunoPage from './pages/NetunoPage.jsx'
import SodramarPage from './pages/SodramarPage.jsx'
import SuallPage from './pages/SuallPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<ImportPage />} />
      <Route path="/hth" element={<HthPage />} />
      <Route path="/genco" element={<GencoPage />} />
      <Route path="/domclor" element={<DomclorPage />} />
      <Route path="/hidroazul" element={<HidroazulPage />} />
      <Route path="/neoclor" element={<NeoclorPage />} />
      <Route path="/netuno" element={<NetunoPage />} />
      <Route path="/sodramar" element={<SodramarPage />} />
      <Route path="/suall" element={<SuallPage />} />
    </Routes>
  </Router>,
)
