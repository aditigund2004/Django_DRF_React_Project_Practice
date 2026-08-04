import React, { useEffect, useState } from 'react'
import { api } from '../apiServices'

const ShowAllOrders = () => {

    const [allorders, setAllorders] = useState([])


    const loadAllOrders = async () => {
        const {data} = await api.get(`/`)
        setAllorders(data)
    }

    useEffect(()=>{
        loadAllOrders();
    },[])
    return (
        <div>
            <h2>
                All Orders
            </h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allorders.map((o) => (
                            <tr key={o.id}>
                                <td>{o.name}</td>
                                <td>{o.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllOrders
