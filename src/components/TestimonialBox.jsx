import React from 'react'

const TestimonialBox = ({text, name, img}) => {

    const user = img ? (
        <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
            <img src={img} alt="Client" className='w-full h-full object-cover' />
        </div>
    ) : (
        <div
            className='w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm p-2'
        >
            {name.charAt(0).toUpperCase()}
        </div>
    )

    return (
        <div className='text-center shadow-lg py-2 px-4 md:py-4 md:px-6 lg:px-10'>
            <p className='text-lg'>{text}</p>
            <div className='flex items-center justify-center gap-3 my-5'>
                {user}
                <p className='font-medium'>{name}</p>
            </div>
        </div>
    )
}

export default TestimonialBox