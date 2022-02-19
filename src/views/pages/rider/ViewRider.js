/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CFormLabel,
    CFormCheck, } from '@coreui/react'

const ViewRider = () => {
  
  return (
    <>
      <CCard className="mb-4">
      
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
               

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Shift Preference</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">Full Time</CFormLabel>
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Preferred Address</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">Rajpur</CFormLabel>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Gender</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">Male</CFormLabel>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Name</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">Shivam</CFormLabel>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Bank Name</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">Bank Name</CFormLabel>
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">A/C No.</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">2323232323</CFormLabel>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">IFSC</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">BanIFSC</CFormLabel>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">PAN No.</CFormLabel>
                      <CCol sm={10}>
                        <CFormLabel  className=" col-form-label">000 000 000 </CFormLabel>
                      </CCol>
                    </CRow>

                    <div className='my-4'>
                        <h5>Uploaded Documents</h5>
                    </div>
                    <CRow className="mb-3">
                      
                      <CCol sm={3}>
                        <img width="100%" src="https://picsum.photos/200"/>
                      </CCol>
                      <CCol sm={3}>
                        <img width="100%" src="https://picsum.photos/200"/>
                      </CCol>
                      <CCol sm={3}>
                        <img width="100%" src="https://picsum.photos/200"/>
                      </CCol>
                    </CRow>
                    
                   
                </CCardBody>
              </CCard>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ViewRider
