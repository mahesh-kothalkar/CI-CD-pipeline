import React from 'react'
import './Owner.css'
import { useNavigate } from 'react-router-dom'
const Owner = () => {

    const navigate = useNavigate();

    function handleAdd(id) {
        navigate('/AddProperty', id)
    }
    const handleEdit = (id) => {
        navigate('/EditProperty',id)
    }

    return (
        <>
            <div className='Owner'>
                <h2 className='owenername'>Owner Page</h2>
                
                    <div className="items">
                        <div className='propname'>Owner Name:Leanne Graham </div>
                        <div className='propemail'>Owner Email: Sincere@april.biz</div>
                        <div className='propaddress'>Owner Address: Kulas Light, Apt. 556, Gwenborough, 92998-3874</div>
                    </div>
                    <button onClick={() => handleAdd()} >Add Property</button>
              
                <div>
                    <div className="item" >
                        <div className='card'> Name: Treebo Trend Parkmahesh</div>
                        <div className='address'> Address: Survey No 161 Behind Laxman Villa Bhosale Nagar Hadapsar, Pune, 411028, 411028, Pune, India</div>
                        <img className='img' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/53/24/532468774.jpeg" alt='img' /><br />
                        <button onClick={() => handleEdit()} >Edit </button>
                        <button >Delete </button>
                    </div>
                    <div className="item" >
                        <div className='card'> Name: Meluha The Fernmhahbrejhwb</div>
                        <div className='address'> Address: Central Avenue, Hiranandani Gardens, Powai, 400076, Mumbai, India</div>
                        <img className='img' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/63/08/630813794.jpeg" alt='img' /><br />
                        <button onClick={() => handleEdit()} >Edit </button>
                        <button >Delete </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Owner