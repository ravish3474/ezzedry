/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText, } from '@coreui/react'

const AddSubAdmin = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Sub-Admin </span>
            {/* <button className='btn btn-primary'>Add</button> */}
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CInputGroup className="mb-3">
                      
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      
                      <CFormInput type="email" placeholder="email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      
                      <CFormInput type="number" placeholder="Phone Number" autoComplete="Phone" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                     
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                   
                        <CButton color="primary" className="px-4">
                          Save
                        </CButton>
                     
                  </CForm>
                </CCardBody>
              </CCard>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddSubAdmin
