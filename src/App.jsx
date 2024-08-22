//App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
