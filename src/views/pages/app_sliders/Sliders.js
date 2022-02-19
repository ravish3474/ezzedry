/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { Link } from 'react-router-dom'


const Sliders = () => {
    const [activeKey, setActiveKey] = useState(1);
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Coupon List</span>
            <Link to="/add-app-sliders" className='btn btn-primary'>Add</Link>
          </div>
        </CCardHeader>
        <CCardBody>
            <CRow>
            <CNav variant="pills" role="tablist">
                <CNavItem>
                    <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 1}
                    onClick={() => setActiveKey(1)}
                    >
                    Customers
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 2}
                    onClick={() => setActiveKey(2)}
                    >
                    Shops
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink
                    href="javascript:void(0);"
                    active={activeKey === 3}
                    onClick={() => setActiveKey(3)}
                    >
                    Riders
                    </CNavLink>
                </CNavItem>
                </CNav>
                <CTabContent>
                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                    Raw denim you probably 
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                    Food truck fixie locavore, 
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
                </CTabPane>
                </CTabContent>
            </CRow>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Image</th>
                      
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td><img height="70" width="100" src="https://picsum.photos/200"/></td>
                  
                        <td>
                          <div>
                            <button className='btn btn-primary mr-2'>Edit</button>
                            <button className='btn btn-danger  text-white'>Delete</button>
                          </div>

                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Sliders
