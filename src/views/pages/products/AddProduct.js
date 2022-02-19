/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormInput,
    CInputGroup,
    CFormLabel,
    CFormCheck, } from '@coreui/react'

const AddProduct = () => {
  
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
                      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Product Name</CFormLabel>
                      <CCol sm={4}>
                        <CFormInput type="text" id="staticEmail" placeholder="Product Name" />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel  className="col-sm-2 col-form-label">Product Image</CFormLabel>
                      <CCol sm={4}>
                        <CFormInput type="file" />
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

export default AddProduct
