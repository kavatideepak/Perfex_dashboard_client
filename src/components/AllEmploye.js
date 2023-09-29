import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function AllEmployee() {
  const navigate = useNavigate();
  const GotoSidebar = () => {
    navigate("/admin");
  };
  const GotoFeedback = () => {
		navigate("/employeFeedback");
	};
    const GotoEmpFeedback = () => {
		navigate("/Empfeedback");
	};

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token === undefined){
            navigate('/')
        }

    })

  return (
    <div>
     
      <div className='parent_section'>
        <div className='row'>
          <div className='col-lg-3  '>
            <div className='sidebar_employee sticky-top '>
              <div className='sidebar_item d-lg-block d-xl-block d-none sticky-top ' >
                <div className='admin_section mx-2'>
                  <div className='image_section py-3 '>
                    <img src="./images/Perfexlogowhite.png" className='logo_img' alt='logo' />
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
                    <div className='employement my-3 mx-2 ' onClick={GotoSidebar}><i class="ri-user-add-line  employe_icon"></i> Add Employment</div>
                    <div className='employement my-3 mx-2 active' onClick={GotoSidebar}><i class="ri-team-fill  employe_icon"></i> All Employment</div>
                    <div className='employement my-3 mx-2' onClick={GotoEmpFeedback}> <i class="ri-feedback-line employe_icon"></i> FeedBack</div>
                  </div>
                  <div className='button_item '>
                    <button className='logout_button'> Logout <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className='col-lg-7 d-lg-block d-xl-block d-none table_item'>
            <div className='admin_header my-2'>Admin Dashboard</div>
            <div className='adimn_dashnbord my-3'>Welcome to the Perfex Admin Dashboard. Please Add your Employement Feedback.</div>
            <table className='table table-bordered  text-center table-hover admin_table'>
              <thead className='table_head'>
                <tr>
                  <th>SNo</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Employee ID</th>
                  <th>Mobile Number</th>
                  <th>Joining Date</th>
                  <th>View</th>

                </tr>
              </thead>
              <tbody className='table_body'>
                <tr>
                  <td>1</td>
                  <td>Kishan</td>
                  <td>kishan@example.com</td>
                  <td>12345</td>
                  <td>9876543210</td>
                  <td>10/10/2022</td>
                  <td><button className='table_button' onClick={GotoFeedback}> Feedback</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ashok</td>
                  <td>Ashok@example.com</td>
                  <td>12345</td>
                  <td>9876543210</td>
                  <td>10/10/2022</td>
                  <td><button className='table_button' onClick={GotoFeedback}>Feedback</button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sunil</td>
                  <td>sunil@example.com</td>
                  <td>12345</td>
                  <td>9876543210</td>
                  <td>10/10/2022</td>
                  <td><button className='table_button' onClick={GotoFeedback}>Feedback</button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Deepak</td>
                  <td>Deepak@example.com</td>
                  <td>12345</td>
                  <td>9876543210</td>
                  <td>10/10/2022</td>
                  <td><button className='table_button' onClick={GotoFeedback}>Feedback</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default AllEmployee