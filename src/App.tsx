import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Page';
import About from './pages/About/Page';
import Code from './pages/Code/Page';
import Contact from './pages/Contact/Page';
import Cinema from './pages/Cinema/Page';
import Literature from './pages/Literature/Page';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="code" element={<Code />} />
          <Route path="cinema" element={<Cinema />} />
          <Route path="literature" element={<Literature />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
