import React from 'react'
import { useState, useEffect } from 'react';

// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const GotoAllemployee = () => {
		navigate("/allEmploye");
	};
  const GotoEmpFeedback = () => {
		navigate("/Empfeedback");
	};


    const Logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem('employeType')
        navigate('/')
    }

    useEffect(()=>{
        let token = localStorage.getItem('token')
        console.log(token, 'token')
        if(token === null){
            navigate('/')
        }

    })

  
  return (
    <div className='parent_section'>
     
      <div className='row'>
        <div className='col-lg-3 col-md-5 '>
          <div className='sidebar_employee  '>
            <div className="sidebar_item  d-lg-block d-xl-block d-none  sticky-top" >
              <div className='admin_section mx-2'>
                <div className='image_section py-3 '>
                  <img src= "./images/Perfexlogowhite.png" className='logo_img' alt='logo' />
                </div>
                  <div className=' mb-3 employe_detail '>
                    <div className='admin_name'>Employee Name : <span>P.Kishan</span></div>
                    <div className='admin_id'>ID : <span>123456</span></div>
                    <div className='admin_id'>Designation : <span>Frontend developer</span></div>
                    <div className='admin_id text-end '>Login Time : <span>9:30AM</span></div>
                  </div>
              </div>
              <div className='sidebar '>
                <div className='px-2 mt-3'>
                  <div className='employement my-3 mx-2 active'><i class="ri-user-add-line  employe_icon"></i> Add Employment</div>
                  <div className='employement my-3 mx-2 ' onClick={GotoAllemployee}><i class="ri-team-fill  employe_icon"></i> All Employment</div>
                  <div className='employement my-3 mx-2 ' onClick={GotoEmpFeedback}> <i class="ri-feedback-line employe_icon"></i> FeedBack</div>
                </div>
                <div className='button_item '>
                  <button className='logout_button' onClick={Logout}> Logout <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-7  d-lg-block d-xl-block d-none'>
          <div className='form_item ' >
            <form>
              <div className='admin_header my-2'>Admin Dashboard</div>
              <div className='adimn_dashnbord my-3'>Welcome to the Perfex Admin Dashboard. Please Add your Employement.</div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='my-2'>
                    <label>Employee Name</label>
                    <input type='text' className='form-control' placeholder='Enter Employee Name' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='my-2'>
                    <label>Employee Id</label>
                    <input type='text' className='form-control' placeholder='Enter Employee Id' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className=''>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='Enter Employee Email' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className=''>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Enter Employee Password' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='my-2'>
                    <label>Phone Number</label>
                    <input type='Number' className='form-control' placeholder='Employee Phone Number' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='my-2'>
                    <label>Designation</label>
                    <input type='text' className='form-control' placeholder='Enter Your Designation' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className=''>
                    <label>Joining Date</label>
                    <input type='date' className='form-control' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className=''>
                    <label>Aadhar Number</label>
                    <input type='number' className='form-control' placeholder='Enter Your Aadhar Number' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='my-2'>
                    <label>Training Course</label>
                    <input type='password' className='form-control' placeholder='Enter Your Course' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>

                  <div className='my-2'>
                    <label>Trainer Name</label>
                    <input type='password' className='form-control' placeholder='Enter Your Trainer Name' />
                  </div>
                </div>
              </div>
              <div className=''>
                <label>Employee Type</label>
              </div>
              <div>
                <input type='radio' /> <label className='mx-2'>Trainer</label>
                <input type='radio' /><label className='mx-2'>Trainee</label>
              </div>
              <div className='employement_button my-3'>
                <button className='employement_item'>Add Employement</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>



  )
}

export default Admin;