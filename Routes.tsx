import { createBrowserRouter, } from "react-router-dom";
import App from './src/App';
import Cart from "./src/Pages/Cart";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/cart', element: <Cart /> }
])