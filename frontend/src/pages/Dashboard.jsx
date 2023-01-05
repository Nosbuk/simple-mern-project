import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

export const Dashboard = () => {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  }, user, navigate)
  return <><section className="heading">
      <h1>Welcome {user}</h1>
      <p>Goals Dashboard</p>
    </section></>;
};
