
import Footer from '../components/Footer'
import { Outlet } from 'react-router';
import NavBarResponsive from '../components/NavBar/NavBarResponsive';

import ScrollToTop from './ScrollTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarResponsive />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout