import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <div className="flex flex-row items-center px-2 h-12 justify-items-auto">
        <div>Logo</div>
        <div className="flex flex-grow flex-col items-center">test</div>
        <div>Buttons</div>
      </div>
      <div className="bg-pink-600 flex flex-row justify-between">
        <div>Breadcrumbs</div>
        <div>Action area</div>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="flex flex-col bg-blue-500 flex-grow">
          <div className="flex flex-grow">Data</div>
          <div className="flex flex-grow">Editor</div>
        </div>
        <div className="bg-blue-100 flex-grow">Right</div>
      </div>
    </Fragment>
  )
}

export default App
