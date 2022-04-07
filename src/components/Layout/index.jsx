import Sidebar from "../Sidebar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
        <Sidebar />
        <div className="page w-full h-full absolute">
            <span className="tags top-tags bottom-auto top-[35px]">&lt;body&gt;</span>

            <Outlet /> 

            <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html -ml-5">&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
    
}

export default Layout;