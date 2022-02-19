/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { Link } from 'react-router-dom'

const Coupon = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Coupon</span>
            <Link to="/add-coupon" className='btn btn-primary'>Add</Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
                  <div className='text-center'>
                      <h3>Whoops No coupon found!</h3>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Coupon
