/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const UsersList = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Users List</span>
            {/* <button className='btn btn-primary'>Add</button> */}
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Type</th>
                      <th>Register Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>XYZ</td>
                        <td>Edinburgh@example.com</td>
                        <td>622322221</td>
                        <td>Laundry Outlet</td>
                        <td>2022-01-12 09:46:00	</td>
                        <td>
                          <div>
                            <button className='btn btn-primary mr-2'>Edit</button>
                            <button className='btn btn-danger  text-white'>Block</button>
                          </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>XYZ</td>
                        <td>Edinburgh@example.com</td>
                        <td>622322221</td>
                        <td>Customer</td>
                        <td>2022-01-12 09:46:00	</td>
                        <td>
                          <div>
                            <button className='btn btn-primary mr-2'>Edit</button>
                            <button className='btn btn-danger  text-white'>Block</button>
                          </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>XYZ</td>
                        <td>Edinburgh@example.com</td>
                        <td>622322221</td>
                        <td>Rider</td>
                        <td>2022-01-12 09:46:00	</td>
                        <td>
                          <div>
                            <button className='btn btn-primary mr-2'>Edit</button>
                            <button className='btn btn-danger  text-white'>Block</button>
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

export default UsersList
