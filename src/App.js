import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage'
import WorksPage from './pages/WorksPage';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout></MainLayout>} />
        {/* <Route path='/about' element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path='/resume' element={<MainLayout><ResumePage /></MainLayout>} />
        <Route path='/works' element={<MainLayout><WorksPage /></MainLayout>} />
        <Route path='/contact' element={<MainLayout><Contact /></MainLayout>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
