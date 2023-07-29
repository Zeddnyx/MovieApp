import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/Homepage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Detail from './Page/Detail';
import Nav from './Components/Layouts/Nav';
import Search from './Page/Search';
import Footer from './Components/Layouts/Footer';

function App() {
  const query = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
