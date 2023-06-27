import {
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
} from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
