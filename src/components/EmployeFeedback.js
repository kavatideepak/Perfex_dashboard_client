import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function EmployeFeedback() {
  const navigate = useNavigate();
  const GotoSidebar = () => {
    navigate("/admin");
  };
  const GotoAllemployee = () => {
    navigate("/allEmploye");
  };
  const GotoEmpFeedback = () => {
    navigate("/employeFeedback");
  };

  useEffect(()=>{
    let token = localStorage.getItem('token') //undefined
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
                    <div className='employement my-3 mx-2 active' onClick={GotoAllemployee}><i class="ri-team-fill  employe_icon"></i> All Employment</div>
                    <div className='employement my-3 mx-2' onClick={GotoEmpFeedback}> <i class="ri-feedback-line employe_icon"></i> FeedBack</div>
                  </div>
                  <div className='button_item '>
                    <button className='logout_button'> Logout <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 d-lg-block d-xl-block d-none feddback_item'>
            <div className='my-2'>
              <div className='admin_header1'>Employee Name: <span>P.Kishan</span></div>
              <div className='adimn_dashnbord1'>Employee ID: <span>123456</span></div>
            </div>
            <div className='month_item'>
              <div><i class="ri-arrow-left-line symbol"></i></div>
              <div className='month'>September</div>
              <div><i class="ri-arrow-right-line symbol"></i></div>
            </div>
            <div>
              <div className='card my-3'>
                <div className='week_item'> Week 4 :<span className='date_item'> 25/09/2023 - 31/09/2023</span> </div>
                <div className='my-2'>
                  <div className='status'>
                    Status
                  </div>
                  <div className='d-flex'>
                    <div className='pending'>Pending</div>
                  </div>
                </div>
                <div className='view_button' data-toggle="modal" data-target="#myModal">
                  View
                </div>
                <div className="modal" id="myModal">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Your FeedBack</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        <div className='week_item'> Week 4 :<span className='date_item'> 25/09/2023 - 31/09/2023</span> </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>25/09/2023 : Monday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>26/09/2023 : Tuesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>27/09/2023 : Wednesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>28/09/2023 : Thursday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>29/09/2023 : Friday</div>
                          <div className=' text_area'></div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="table_button1" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='week_item'> Week 3 :<span className='date_item'> 17/09/2023 - 24/09/2023</span> </div>
                <div className='my-2'>
                  <div className='status'>
                    Status
                  </div>
                  <div className='d-flex'>
                    <div className='finish'>Complete</div>
                  </div>
                </div>
                <div className='view_button' data-toggle="modal" data-target="#myModal1">
                  View
                </div>
                <div className="modal" id="myModal1">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Your FeedBack</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        <div className='week_item'> Week 3 :<span className='date_item'> 17/09/2023 - 24/09/2023</span> </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>17/09/2023 : Monday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>18/09/2023 : Tuesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>19/09/2023 : Wednesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>20/09/2023 : Thursday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>21/09/2023 : Friday</div>
                          <div className=' text_area'></div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="table_button1" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='card my-3'>
                <div className='week_item'> Week 2 :<span className='date_item'> 9/09/2023 - 16/09/2023</span> </div>
                <div className='my-2'>
                  <div className='status'>
                    Status
                  </div>
                  <div className='d-flex'>
                    <div className='finish'>Complete</div>
                  </div>
                </div>

                <div className='view_button'  data-toggle="modal" data-target="#myModal2" >
                  View
                </div>
                <div className="modal" id="myModal2">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Your FeedBack</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        <div className='week_item'> Week 2 :<span className='date_item'> 09/09/2023 - 16/09/2023</span> </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>09/09/2023 : Monday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>10/09/2023 : Tuesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>11/09/2023 : Wednesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>12/09/2023 : Thursday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>13/09/2023 : Friday</div>
                          <div className=' text_area'></div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="table_button1" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='week_item'> Week 1 :<span className='date_item'> 1/09/2023 - 8/09/2023</span> </div>
                <div className='my-2'>
                  <div className='status'>
                    Status
                  </div>
                  <div className='d-flex'>
                    <div className='finish'>Complete</div>
                  </div>
                </div>
                <div className='view_button' data-toggle="modal" data-target="#myModal3">
                  View
                </div>
                <div className="modal" id="myModal3">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"> Your FeedBack</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        <div className='week_item'> Week 1 :<span className='date_item'> 01/09/2023 - 08/09/2023</span> </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>01/09/2023 : Monday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>02/09/2023 : Tuesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>03/09/2023 : Wednesday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>04/09/2023 : Thursday</div>
                          <div className=' text_area'></div>
                        </div>
                        <div>
                          <div className='adimn_dashnbord1 py-2'>05/09/2023 : Friday</div>
                          <div className=' text_area'></div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="table_button1" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-4'>
              <button className='back_button' onClick={GotoAllemployee}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeFeedback