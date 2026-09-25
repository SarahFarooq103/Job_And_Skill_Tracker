import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar/>
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <Footer />

      </div>
    </div>
  )
}

export default DashboardLayout
