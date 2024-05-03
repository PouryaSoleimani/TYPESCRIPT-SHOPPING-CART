import React from 'react'

const Testing = () => {
    const age: number = 10
    const firstName: string = 'pourya'
    const job: string = 'developer'
 
    return (
        <div className='bg-red-700 p-8 text-3xl font-bold'>

            <h1>{firstName} - {age} - {job}</h1>
                
        </div>
    )
}

export default Testing

// support.type.primitive.tsx