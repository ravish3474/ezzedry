/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CFormLabel,
    CFormCheck, } from '@coreui/react'

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
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="text" id="staticEmail" placeholder="Username" />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Password</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="password" placeholder="Password" />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Confirm Password</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="password" autoComplete="current-password" placeholder="Confirm Password" />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Email</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="email" placeholder="Email" />
                      </CCol>
                    </CRow>

                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Phone</CFormLabel>
                      <CCol sm={10}>
                        <CFormInput type="number" maxLength={10} minLength={9} min={0} placeholder="Phone" />
                      </CCol>
                    </CRow>

                    <div className='my-4'>
                      <h5>Permissions</h5>
                    </div>
                    
                    <CRow className="mb-3">
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Users"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Sub Admin"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Curfew"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Coupon Codes"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="App Sliders"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Manage Categories"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Earnings"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Batch Payments "/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Refunds"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Inbox"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Notifications"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Laundry"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Laundry Request"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Rider"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Rider Request"/>
                      </CCol>
                      <CCol sm={3}>
                        <CFormCheck id="check1" label="Transactions"/>
                      </CCol>
                    </CRow>

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
