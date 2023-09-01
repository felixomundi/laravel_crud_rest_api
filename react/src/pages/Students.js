import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import Loader from '../components/Loader';
function Students() {
    const [stu, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchStudents() {
            try {
                let url = "http://localhost:8000/api/students"
                const response = await axios.get(url);
                setStudents(response.data.students);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
                
        }
        fetchStudents();
        
    }, []);

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    var studentDetails = "";
    studentDetails = stu.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id} </td>
                <td>{item.name} </td>
                <td>{item.email}</td>
                <td><Link to={`/students/${item.id}/edit`} className="btn btn-primary">Edit</Link> </td>
                <td> <button className='btn btn-danger'>Delete</button></td>

            </tr>
        )
    })

  return (
      <div>
          <Header></Header>
          <div className="container-fluid py-5">
              <div className="row">
                  <div className="col-md-12">
                      <div className="card">
                          <div className="card-header">
                              <h3>All students          <Link to="/students/create" className="btn btn-primary float-end">Add Student</Link></h3>
                     
                          </div>
                          <div className="card-body">
                              <div className="table-responsive">
                                  <table className="table table-bordered" style={{ width: "100%" }}>
                                      <thead>
                                          <tr>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                           <th>Edit</th>
                                           <th>Delete</th>
                                         </tr>
                                      </thead>
                                      <tbody>
                                          {studentDetails}
                                          
                                      </tbody>
                                  </table>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Students