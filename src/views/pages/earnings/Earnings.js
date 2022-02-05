/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const Earnings = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>All Earning</span>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Restaurant Name</th>
                      <th>Sales Count</th>
                      <th>Restaurant Earning</th>
                      <th>Total Tax</th>
                      <th>Admin Earning</th>
                      <th>Paid Amount</th>
                      <th>Bank Details</th>
                      <th>Unpaid Balance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
                        <td>System</td>
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

export default Earnings
