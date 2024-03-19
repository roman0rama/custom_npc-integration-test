import React from 'react'

export const Input = ({action, value, name, type, placeholder}) => {
    return(
        <input
            onChange={action}
            value={value}
            name={name}
            className={`focus:border-[#B801D8] rounded-none w-max mt-[8px] py-[8px] pl-[16px] text-lg text-[#9A9EA5] border-[#E2E4E5] bg-transparent border-b focus:outline-none`}
            type={type}
            placeholder={placeholder} />
    )
}