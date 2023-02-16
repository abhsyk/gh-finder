import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { Layout } from './layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
