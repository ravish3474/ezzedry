/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CFormLabel,
    CFormCheck,
    CFormSelect, } from '@coreui/react'

const AddCoupon = () => {
  
  return (
    <>
      <CCard className="mb-4">
      
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Coupon Code</CFormLabel>
                      <CCol sm={4}>
                        <CFormInput type="text" class="form-control-plaintext"  placeholder="Coupon Code"  />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Discount </CFormLabel>
                      <CCol sm={4}>
                        <CFormSelect aria-label="Default select example">
                            <option selected disabled>Select Discount</option>
                            <option value="1">1% - 100%</option>
                        </CFormSelect>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Expiry Date</CFormLabel>
                      <CCol sm={4}>
                        <CFormInput type="date" />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Usage Per Customer</CFormLabel>
                      <CCol sm={4}>
                        <CFormInput type="number" />
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

export default AddCoupon
