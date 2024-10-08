import React from 'react'

export default function Input({ placeholder,checked, type, children, onChange }) {

  const hover = {
    hov1: "checked:bg-sky-700  indeterminate:bg-gray-300",
    hov2: "checked:bg-green-700  indeterminate:bg-gray-300",
    hov3: "checked:bg-gray-700  indeterminate:bg-gray-300",
    hov4: "checked:bg-red-700  indeterminate:bg-gray-300",
  }

  return (
    <span className={`text-sm font-semibold text-black mx-32 ${hover[checked]}`}>
      <div>
        <input type={type} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} className=' mt-20 p-2 rounded-2xl placeholder-black cursor-pointer border w-72' id="input-id" children={children} />
      </div>
    </span>
  )
}