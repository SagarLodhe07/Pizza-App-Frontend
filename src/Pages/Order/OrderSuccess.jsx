import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";


import SuccessSvg from "../../assets/IMG/success.svg";
function OrderSuccess() {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-20">
        <img src={SuccessSvg} 
        width={400}
        height={400}/>
        <p className="font-semibold">Order Placed</p>
        <button className="bg-orange-400 text-white px-5 py-2 rounded-md" onClick={()=>navigate('/')}>Go back</button>
      </div>
    </Layout>
  );
}
export default OrderSuccess;
