import { Outlet } from "react-router-dom";

const Layout = () =>{
    return (
        <div className="layout">
            <Outlet/>
            <div>
                ???
            </div>
        </div>
    )
}


export default Layout;