import { useState } from 'react';

function FilterCarpark({ cp }) {

    const fList = cp.filter((item) => item.carpark_info[0].lots_available > 0);
    const cpx = fList.map((item) => ({
        ...item,
        displayed: true,
        dispColour: item.carpark_info[0].lots_available < 30 ? item.carpark_info[0].lots_available < 10 ? 'red' : 'yellow' : 'green',
        favourite: false,

    }));

    const filterDistance = (list, d) => {
        const cpx = list.map((item) => ({
            ...item,
            displayed: item.distance < d ? true : false
        }));
        return cpx;
    }

    const filterNight = (list) => {
        const cpx = list.map((item) => ({
            ...item,
            displayed: item.night_parking === 'YES' ? true : false
        }));
        return cpx;
    }


    console.log(cpx);

    return (
        <div>
            <div >
                {cpx && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CP number</th>
                                <th>CP type</th>
                                <th>Address</th>
                                <th>Free parking</th>
                                <th>Lots Available</th>
                                <th>Total lots</th>
                                <th>Last updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cpx &&
                                cpx.map((item) => (
                                    item.displayed && <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.car_park_no}</td>
                                        <td>{item.car_park_type}</td>
                                        <td>{item.address}</td>
                                        <td>{item.free_parking}</td>
                                        <td>
                                            {item.carpark_info.length > 0
                                                ? item.carpark_info[0]?.lots_available
                                                : 'Not available'}
                                        </td>
                                        <td>
                                            {item.carpark_info.length > 0
                                                ? item.carpark_info[0]?.total_lots
                                                : 'Not available'}
                                        </td>
                                        <td>{item.update_datetime}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
            <button onClick={() => filterDistance(cpx, 0.7)}>Distance 700m</button>
            <button onClick={() => filterNight(cpx)}>night parking</button>
        </div>
    )
}

export default FilterCarpark;