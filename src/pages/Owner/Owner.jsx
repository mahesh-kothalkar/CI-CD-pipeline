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
                        <div className='propname'>Owner Name: </div>
                        <div className='propemail'>Owner Email: </div>
                        <div className='propaddress'>Owner Address: </div>
                    </div>
                    <button onClick={() => handleAdd()} >Add Property</button>
              
                <div>
                    <div className="item" >
                        <div className='card'> Name: </div>
                        <div className='address'> Address: </div>
                        <img className='img' src="" alt='img' /><br />
                        <button onClick={() => handleEdit()} >Edit </button>
                        <button >Delete </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Owner