import { Link, useNavigate } from 'react-router-dom'
import './AddProperty.css'
const AddProperty = (id) => {
    const navigate = useNavigate()
    const handelsubmit = (e) => {
                navigate('/owner')
    }

    return (
        <>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='constainer' onSubmit={handelsubmit}>
                        <div className='card' >
                            <div className='card-title'>
                                <h2>Add Property Data</h2>
                            </div>
                            <div className='card-body'>
                                <div className='rows'>
                                    <div className='names'>
                                        <div className='form-group'>
                                            <label>NAME : </label>
                                            <input className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='address'>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ADDRESS : </label>
                                            <input className='form-control'></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>PHOTO : </label>
                                            <input className='form-control'></input>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='save' type='checked'>Save</button>
                                            <Link to="/owner" className='links'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProperty