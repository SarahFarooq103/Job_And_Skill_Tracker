import React from 'react'

const EmptyState = ({ title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-gray-500 text-lg">
            <span className="font-xl">📁</span>
        </div>
        <h3 className="text-gray-500 text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        {action && (
        <div className="mt-5">
          {action}
        </div>
      )}

    </div>
  )
}
    
export default EmptyState
