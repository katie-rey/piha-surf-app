import * as React from 'react'

import { FaBars } from 'react-icons/fa'

export default function ButtonAppBar() {
  return (
    <div className="header">
      <div className="menu">
        {' '}
        <FaBars />{' '}
      </div>
      <div className="menu">Piha Surf Report</div>
      <div className="menu"></div>
    </div>
  )
}
