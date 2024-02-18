import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './Context/CitiesContext';
import { AuthProiveder } from './Context/AuthContext';
import ProtectedRoutes from './pages/ProtectedRoutes';

import FullPageSpinner from './components/FullPageSpinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Login = lazy(() => import('./pages/Login'));
const WorldWise = lazy(() => import('./pages/WorldWise'));

function App() {
  return (
    <>
      <AuthProiveder>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<FullPageSpinner></FullPageSpinner>}>
              <Routes>
                <Route path="/product" element={<Product></Product>}></Route>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/pricing" element={<Pricing></Pricing>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                  path="/worldWise"
                  element={
                    <ProtectedRoutes>
                      <WorldWise></WorldWise>
                    </ProtectedRoutes>
                  }
                >
                  <Route
                    index
                    element={<Navigate replace to="cities"></Navigate>}
                  ></Route>
                  <Route path="cities" element={<CityList></CityList>}></Route>
                  <Route path="cities/:id" element={<City></City>}></Route>
                  <Route
                    path="countries"
                    element={<CountryList></CountryList>}
                  ></Route>
                  <Route path="form" element={<Form></Form>}></Route>
                </Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProiveder>
    </>
  );
}

export default App;
