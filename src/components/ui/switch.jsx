import * as React from 'react'

export default function Switch({ checked = false, onChange = () => {}, className = '' }) {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}> 
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
      />

      <span
        aria-hidden
        className={`relative inline-block h-6 w-11 rounded-full transition-colors duration-150 ease-in-out ${checked ? 'bg-blue-500' : 'bg-slate-700'}`}
      >
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-150 ease-in-out ${checked ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </span>
    </label>
  )
}
