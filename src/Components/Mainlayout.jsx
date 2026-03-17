import Footer from './Footer'
import { Outlet } from 'react-router'
import Navber from './Navber'

const Mainlayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default Mainlayout