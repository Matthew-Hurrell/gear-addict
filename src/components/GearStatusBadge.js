import React from 'react';

const GearStatusBadge = (props) => {
    const {
        repair,
        sale,
        insured,
    } = props;

    return (
        <>
            {repair &&
                <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center">
                    <i className="fa-solid fa-hammer text-2xl text-red-600"></i>
                </div>
            }
            {sale &&
                <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center">
                    <i className="fa-regular fa-money-bill-wave text-2xl text-green-700"></i>
                </div>
            }
            {insured &&
                <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center">
                    <i className="fa-solid fa-shield-check text-2xl text-blue-600"></i>
                </div>
            }
        </>
    )
}

export default GearStatusBadge