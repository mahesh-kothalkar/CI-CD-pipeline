import React from 'react'

import './Tenant.css'
const Tenant = () => {

    return (
        <>
            <div className='Tenant'>
                <h2 className='name'>Welcome Tenant</h2>
                <>
                    <div className="item">
                        <div className='card'>Name:Treebo Trend Parkmahesh </div>
                        <br />
                        <div className='address'>property : Survey No 161 Behind Laxman Villa Bhosale Nagar Hadapsar, Pune, 411028, 411028, Pune, India</div>
                        <img className='tenantpageimg' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/53/24/532468774.jpeg" alt='img'/>
                    </div>
                    <div className="item">
                        <div className='card'>Name:Meluha The Fernmhahbrejhwb</div>
                        <br />
                        <div className='address'>property :Central Avenue, Hiranandani Gardens, Powai, 400076, Mumbai, India</div>
                        <img className='tenantpageimg' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/63/08/630813794.jpeg" alt='img'/>
                    </div>
                </>
            </div>
        </>
    )
}

export default Tenant