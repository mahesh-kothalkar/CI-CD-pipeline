import React from 'react'

import './Tenant.css'
const Tenant = () => {

    return (
        <>
            <div className='Tenant'>
                <h2 className='name'>Welcome Tenant</h2>
                <>
                    <div className="item">
                        <div className='card'>Name</div>
                        <br />
                        <div className='address'>property Address</div>
                        <img className='tenantpageimg' src="" />
                    </div>
                </>
            </div>
        </>
    )
}

export default Tenant