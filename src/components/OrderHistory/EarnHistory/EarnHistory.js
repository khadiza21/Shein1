import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authkey } from '../../Login/authkey';
import OrderHistory from '../OrderHistory';

const EarnHistory = () => {

    const [dataLimit, setDataLimit] = useState();
    const [ehistory, setehistory] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        var history = new FormData();
        history.append("earnHistory", "");
        history.append("auth", authkey);
        history.append("limit", 500);
        history.append("logged", localStorage.getItem('auth'));
        fetch("https://mining-nfts.com/api/", {
            method: "POST",
            body: history,
        })
            .then((res) => res.json())
            .then((ehistoryData) => {
                if (ehistoryData.status == 200) {
                    setehistory(ehistoryData.message);
                   

                } else {
                    navigate("/login");
                }
            });
    }, []);

 

    let a1 = ehistory?.slice(0, 50);
    let a2 = ehistory?.slice(0, 100);
    let a3 = ehistory?.slice(0, 200);
    let a4 = ehistory?.slice(0, 300);
    let a5 = ehistory?.slice(0, 400);
    let a6 = ehistory?.slice(0, 500);

    let d = a6;


    if (dataLimit == 1) {
        d = a1;
    } else if (dataLimit == 2) {
        d = a2;
    }
    else if (dataLimit == 3) {
        d = a3;
    }
    else if (dataLimit == 4) {
        d = a4;
    }
    else if (dataLimit == 5) {
        d = a5;
    }
    else if (dataLimit == 6) {
        d = a6;
    } else if (dataLimit == 7) {
        d = a6;
    }


    return (
        <div>
            <OrderHistory></OrderHistory>

            <div  className="container mx-auto max-w-[1080]">
                <div className="flex justify-between my-10 lg:mx-0 md:mx-0 mx-5">
                    <select
                        id="dataLimit" defaultValue="Select Limit"
                        onChange={(e) => setDataLimit(e.target.value)}
                        className="select select-secondary select-bordered w-[150px] max-w-xs">
                        <option vlaue={7} selected>
                            All
                        </option>
                        <option value={1}>50</option>
                        <option value={2}>100</option>
                        <option value={3}>200</option>
                        <option value={4}>300</option>
                        <option value={5}>400</option>
                        <option value={6}>500</option>
                    </select>

                </div>


                <section className="  container my-10">
                    <div className="overflow-x-auto w-full rounded shadow-lg   ">
                        <table className="table table-compact w-full text-center font-bold mb-16">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Amount </th>
                                    <th>Type</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            {d?.map((p) => (
                                <tbody key={p?.id}>
                                    <tr>
                                        <th>{p?.id}</th>
                                        <td>{p?.amount}</td>
                                        <td>{p?.type}</td>
                                        <td>{p?.time}</td>                                    
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default EarnHistory;