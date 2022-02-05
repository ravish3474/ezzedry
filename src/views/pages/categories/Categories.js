/* eslint-disable prettier/prettier */
import React, { useEffect, useState, createRef } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'


const CategoryList = () => {
  
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className='d-flex justify-content-between align-items-center'>
            <span>Category List</span>
            <button className='btn btn-primary'>Add Category</button>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <div className=''>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>Id </th>
                      <th>Category</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laundry</td>
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

export default CategoryList
