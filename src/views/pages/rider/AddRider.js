/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CFormLabel,
    CFormCheck, } from '@coreui/react'

const AddRider = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Add Rider </span>
            {/* <button className='btn btn-primary'>Add</button> */}
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="email" readOnly id="staticEmail" placeholder="Username" />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Password</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="password" readOnly placeholder="Password" />
                      </CCol>
                    </CRow>
                    

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">First Name</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" class="form-control-plaintext" plainText placeholder="First Name" readOnly />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Last Name</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" class="form-control-plaintext" plainText placeholder="Last Name" readOnly />
                      </CCol>
                    </CRow>
                   

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Phone</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="number" class="form-control-plaintext" plainText maxLength={10} minLength={9} min={0} placeholder="Phone" readOnly/>
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Rider Fee</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" class="form-control-plaintext" placeholder='12' plainText readOnly />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">City</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" class="form-control-plaintext" plainText placeholder='Dehradun' readOnly />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Note</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" name='' />
                      </CCol>
                    </CRow>
                  
                    
                    

                    <CButton color="primary" className="px-4">
                      Submit
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

export default AddRider
