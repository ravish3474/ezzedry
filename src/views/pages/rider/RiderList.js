/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { Link } from 'react-router-dom'


const RiderList = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Sub-Admin List</span>
            <Link to="/add-rider" className='btn btn-primary'>Add</Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Rider Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ramesh</td>
                        <td>Edinburgh@example.com</td>
                        <td>622322221</td>
                        <td>
                          <div>
                            <button className='btn btn-primary '>Accept</button>
                            <Link to="/view-rider" className='btn btn-primary ml-2'>View</Link>
                            <button className='btn btn-danger ml-2 text-white'>Delete</button>
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

export default RiderList
