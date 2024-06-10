import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiArrowSmLeft, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import userImg from "../assets/1.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import {useLocation, useNavigate} from 'react-router-dom'

const SideBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
    const  handleLogout = () => {
        logOut().then(()=>{
            alert('Deslogado com sucesso!!');
            navigate(from, {replace: true})
        }).catch(err => {
            console.log(err);
        })
    }

  return (
    <div>
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo 
              href="/" 
              img={user?.photoURL || userImg} 
              imgAlt="Logo"
              className="w-16 h-16 "
            >
            <p>{user?.displayName || "User"}</p>
        </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Painel de Controle
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload de Roupas
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Gerenciar Roupas
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Logar
          </Sidebar.Item>
          <Sidebar.Item href="/" onClick={handleLogout} icon={HiArrowSmLeft}>
            Deslogar
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar