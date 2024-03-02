import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const isDashboardActive = location.pathname === "/dashboard";
  const isGroupsActive = location.pathname === "/dashboard/users";
  const isPagesActive = location.pathname === "/dashboard/set-time";
  const handleLogout = () => {
    window.location.href = '/login-admin';
  }
  return (
    <section>
   
      <div className="flex flex-col gap-5 w-full ">
        <div className="w-full text-gold top-0 sticky flex justify-between items-center bg-black border-b px-3 py-3 border-[#777]/50">
          <a href={"/dashboard"}>
            <img
              src={"/logo1.png"}
              alt={"logo"}
              width={300}
              height={300}
              className="w-[70px] md:w-[70px]  object-contain"
            />
          </a>
          <div>

            <button onClick={handleLogout} className="font-medium text-black bg-gold py-3 px-6 flex items-center  hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
            >Logout</button>

          </div>
        </div>
      </div>
      <div className="flex md:hidden my-5 w-full flex-col items-center justify-center">
        
        <li className="list-none w-full">
          <Link to="/dashboard" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isDashboardActive
            ? "bg-gold text-black"
            : " text-white"
            }`} >

            <RxDashboard />
            <p

            >
              Dashboard
            </p>
          </Link>
        </li>
     
     
        <li className="list-none w-full">
          <Link to="/dashboard/users" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isGroupsActive ? "bg-gold text-black" : " text-white"
            }`}>
            <FaUsers />
            <p

            >
              Users
            </p>
          </Link>
        </li>
      
    
        <li className="list-none w-full">
          <Link to="/dashboard/set-time" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isPagesActive ? "bg-gold text-black" : " text-white"
            }`}>
            <LuTimer />
            <p

            >
              Vote time
            </p>
          </Link>
        </li>
     
    </div>
      <div className="flex flex-row">
        <aside className="w-full hidden min-h-screen md:max-w-[250px]  border-r border-[#777]/40 md:block">
          <nav>
            <div className="w-full items-start text-[18px] font-[400]  flex gap-2 pt-3 ">
              <li className="list-none w-full">
                <Link to="/dashboard" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isDashboardActive
                  ? "bg-gold text-black"
                  : " text-white"
                  }`} >

                  <RxDashboard />
                  <p

                  >
                    Dashboard
                  </p>
                </Link>
              </li>
            </div>
            <div className="w-full items-start text-[18px] font-[400]   flex gap-2 ">
              <li className="list-none w-full">
                <Link to="/dashboard/users" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isGroupsActive ? "bg-gold text-black" : " text-white"
                  }`}>
                  <FaUsers />
                  <p

                  >
                    Users
                  </p>
                </Link>
              </li>
            </div>
            <div className="w-full items-start text-[18px] font-[400]   flex gap-2 ">
              <li className="list-none w-full">
                <Link to="/dashboard/set-time" className={`flex gap-2 items-center w-[90%] mx-2 rounded-lg px-5 py-3 ${isPagesActive ? "bg-gold text-black" : " text-white"
                  }`}>
                  <LuTimer />
                  <p

                  >
                    Vote time
                  </p>
                </Link>
              </li>
            </div>
          </nav>
        </aside>
        <main className="w-full  pl-4 py-4 md:pr-8 pr-4 ">{children}</main>
      </div>
    </section>

  );
};

export default DashboardLayout;
