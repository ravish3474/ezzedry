/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CButton, CRow, CCol, CCard, CCardHeader, CCardBody,   CForm,
    CFormCheck,
    CInputGroup,
    CInputGroupText, } from '@coreui/react'

const Curfew = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Curfew</span>
            {/* <button className='btn btn-primary'>Add</button> */}
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
            <CCard className="p-4">
                <CCardBody>
                    <CForm>
                    

                        <CInputGroup className="mb-2">
                            <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Off"/> 
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="No" defaultChecked/> 
                        </CInputGroup>

                       
                        <CButton color="primary" className="px-4">
                            Update Curfew Status
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

export default Curfew
