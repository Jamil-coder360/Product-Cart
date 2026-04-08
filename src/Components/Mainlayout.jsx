import Footer from './Footer'
// import { Outlet } from 'react-router'
import Navber from './Navber'
import { Outlet, useNavigation } from "react-router";

const Mainlayout = () => {
  const navigation = useNavigation();

  return (
    <>
       {navigation.state === "loading" && (
       <div className="flex flex-col items-center gap-2">
  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  <p className="text-sm text-gray-700">Loading...</p>
</div>
      )}
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default Mainlayout



// function Mainlayout() {

//   return (
//     <>
   

//       {/* navbar */}
//       <h1>Navbar</h1>

//       {/* page content */}
//       <Outlet />
//     </>
//   );
// }

// export default Mainlayout;