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

import Progress from './components/Progress';

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
            <Suspense
              fallback={
                <>
                  <Progress></Progress>
                  <FullPageSpinner></FullPageSpinner>
                </>
              }
            >
              <Routes>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/worldWise"
                  element={
                    <ProtectedRoutes>
                      <WorldWise />
                    </ProtectedRoutes>
                  }
                >
                  <Route
                    index
                    element={<Navigate replace to="cities" />}
                  ></Route>
                  <Route path="cities" element={<CityList />}></Route>
                  <Route path="cities/:id" element={<City />}></Route>
                  <Route path="countries" element={<CountryList />}></Route>
                  <Route path="form" element={<Form />}></Route>
                </Route>
                <Route path="*" element={<PageNotFound />}></Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProiveder>
    </>
  );
}

export default App;
