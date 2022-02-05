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
            <span>Manage Currency</span>
            <button className='btn btn-primary'>Add Currency</button>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Country</th>
                      <th>Currency</th>
                      <th>Code</th>
                      <th>Symbol</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>India</td>
                        <td>Rupees</td>
                        <td>RS</td>
                        <td>RS</td>
                        <td>
                          <div>
                            <button className='btn btn-primary mr-2'>Edit</button>
                            <button className='btn btn-danger  text-white' >Delete</button>
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
