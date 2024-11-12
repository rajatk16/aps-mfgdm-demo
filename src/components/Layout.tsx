import { Outlet, useNavigate } from "react-router-dom"
import { Header } from "./Header"
import { useAppSelector } from "../hooks";
import { useEffect } from "react";
import { selectHasValidCredentials } from "../redux";

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const hasvalidCredentials = useAppSelector(selectHasValidCredentials);

  useEffect(() => {
    if (!hasvalidCredentials) {
      navigate('/credentials')
    }
  }, [hasvalidCredentials, navigate])
  return (
    <div className="overflow-x-hidden w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}