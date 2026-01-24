import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';

// Pages
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import ProviderProfilePage from './pages/ProviderProfile';
import BookingFlowPage from './pages/Booking';
import AuthPage from './pages/Auth';

import BookingsPage from './pages/Bookings';
import ProfilePage from './pages/Profile';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />
      <main className="mx-auto max-w-3xl pt-14">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/book/:providerId" element={<BookingFlowPage />} />
          <Route path="/provider/:providerId" element={<ProviderProfilePage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
