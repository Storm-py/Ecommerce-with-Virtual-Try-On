import React, { lazy, Suspense } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js'
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Men from './pages/Men.jsx';
import Women from './pages/Women.jsx';
import Outerwear from './pages/Outerwear.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/SignUp/SignUp.jsx';
import Cart from './pages/Cart.jsx';
import Dashboard from './pages/Dashboard.jsx';


const Home = lazy(() => import('./pages/Home.jsx'));
const Layout = lazy(() => import('./Layout.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading layout...</div>}>
          <Layout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path='shop'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Shop />
          </Suspense>
        }
      />
      <Route
        path='men'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Men />
          </Suspense>
        }
      />
      <Route
        path='women'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Women />
          </Suspense>
        }
      />
      <Route
        path='outerwear'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Outerwear />
          </Suspense>
        }
      />
      <Route
        path='login'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='signup'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path='cart'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path='dashboard'
        element={
          <Suspense fallback={<div>Loading home...</div>}>
            <Dashboard />
          </Suspense>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
);
