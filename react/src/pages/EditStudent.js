import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import Loader from '../components/Loader';
function EditStudent() {
    const [loading, setLoading] = useState(true);
    const [inputError, setInputErrorList] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        
    });
    const handleChange = (e) => {
        e.persist()
        setStudent({...student, [e.target.name]:e.target.value})

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: student.name,
            email:student.email,
        }
       async  function updateStudent() {
            try {
                let url = `http://localhost:8000/api/students/${id}/edit`
                const response = await axios.put(url, data);
                alert(response.data.message);
                setLoading(false);
                navigate("/students")                
                
            } catch (error) {
                if (error.response) {
                    
                if (error.response.status === 422) {
                    setInputErrorList(error.response.data.errors)
                }
                    if (error.response.status === 500) {
                        alert(error.response.data.message);
                }    
                    if (error.response.status === 404) {
                        alert(error.response.data.message);
                }    
                setLoading(false)  
                }
            } 
        }
        updateStudent();
    }

    useEffect(() => {
        async function fetchStudent() {
            try {
                let url = `http://localhost:8000/api/students/${id}/edit`
                const response = await axios.get(url);
                setStudent(response.data.student);
                setLoading(false);
            } catch (error) {
                if (error.response) {
                    
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors)
                    }
                        if (error.response.status === 500) {
                            alert(error.response.data.message);
                    }    
                        if (error.response.status === 404) {
                            alert(error.response.data.message);
                            navigate("/students")
                    }    
                    setLoading(false)  
                    }
            }
                
        }
        fetchStudent();
    }, [id, navigate]);
    

    if (loading) {
        return (
        <Loader></Loader>
    )
}

  return (
    <div>
    <Header></Header>
    <div className="container py-5">
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-header">
                        <h3>Update Student          <Link to="/students" className="btn btn-primary float-end">All Students</Link></h3>
               
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" onChange={handleChange} value={student.name} name="name" className='form-control' />
                                    <span className="text-danger">{ inputError.name }</span>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"  onChange={handleChange} value={student.email} name="email" className='form-control'/>
                                    <span className="text-danger">{ inputError.email }</span>
                                </div>
                               
                            </div>
                            <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditStudent