/* eslint-disable prettier/prettier */

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { Link } from 'react-router-dom'


const ProductsList = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Product List</span>
            <Link to="/add-product" className='btn btn-primary'>Add</Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Product Name</th>
                      <th>Product Image</th>
                      
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>System Architect</td>
                        <td><img height="70" width="100" src="https://picsum.photos/200"/></td>
                  
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

export default ProductsList
