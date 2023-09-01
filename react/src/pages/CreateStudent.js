import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import Loader from '../components/Loader';
function CreateStudent() {
    
    const [loading, setLoading] = useState(false);
    const [inputError, setInputErrorList] = useState({});
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        email:"",
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
       async  function createStudent() {
            try {
                let url = "http://localhost:8000/api/students"
                const response = await axios.post(url, data);
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
                setLoading(false)  
                }
            } 
        }
        createStudent();
    }

    useEffect(() => {
       
    }, []);
    

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
                              <h3>Add Student          <Link to="/students" className="btn btn-primary float-end">All Students</Link></h3>
                     
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

export default CreateStudent