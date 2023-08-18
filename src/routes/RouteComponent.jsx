import React from 'react'
import { Routes,Route } from 'react-router-dom'
import WorkSpace from '../pages/workSpace/WorkSpace'

function RouteComponent() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<WorkSpace />} />
          </Routes>
    </div>
  )
}

export default RouteComponent