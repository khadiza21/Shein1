import React from "react";
import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import "./OrderHistory.css";

const OrderHistory = () => {
  return (
    <div className="bg-white ">

      <header className=" bg-slate-200 navbar flex justify-end  pr-5   py-4">
        <h1 href className=" lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-black">History</h1>
      </header>

      <div className="  my-24 ">
        <div className="container mx-auto max-w-[1080]">
          <section>
            <div className="p-10 shadow-lg  w-full  rounded">
              <div className=" items-center text-center ">
                <h2 className=" font-bold text-3xl text-sky-900">This data is provide by SHEIN</h2>
                <p className="text-black font-bold my-3 text-xl">My total assests</p>
                <p className="font-bold text-7xl text-purple-800">0</p>
              </div>
            </div>
          </section>

          <section className="">
            <div className=" bg-slate-400 ">
              <ul className="flex  text-small py-4 lg:text-xl md:text-xl text-center text-balck">
                <li ><Link to="/">All</Link></li>
                <li ><Link to="/p">Pending</Link></li>
                <li ><Link to="/p">Completed</Link></li>
                <li ><Link to="/p">Canceled</Link></li>
              </ul>


            </div>
          </section>

          <section className="  container  my-10 ">
            {/* {p ? <> </> : <></>} */}
            <div className="overflow-x-auto w-full rounded shadow-lg ">
              <table className="table w-11/12 mx-auto">
                <thead>
                  <tr>
                    <th>Product Title </th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="font-bold">  Mobile </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>

                      </div>
                    </td>
                    <td className="font-bold">120 <sup><i className="fa-solid fa-dollar-sign"></i></sup> </td>
                    <td className="font-bold">12 <sup><i className="fa-solid fa-percent"></i></sup></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>


          {/* <section className="">
            <div className="">
              <img className=" mx-auto my-12 h-64 lg:72 md:72" src="https://sheinbj.com/_nuxt/cea5d78.svg" alt="" srcset="" />
            </div>
          </section> */}

        </div>
      </div>
      <div className="OrderHistoryFooter">
        <Navber></Navber>
      </div>

    </div>


  );
};

export default OrderHistory;
