// App.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Home from './Home.jsx';
import CityRestaurants from './CityRestaurants.jsx';
import ViewRestaurants from './ViewRestaurants.jsx';
import { RestaurantCardPage } from './RestaurantCardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<CityRestaurants />} />
        <Route path="/:title/restaurants" element={<ViewRestaurants />} />
        <Route path="/cardPage" element={<RestaurantCardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);