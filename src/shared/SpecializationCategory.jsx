import React, {useState, useEffect } from 'react'
import SpecializationItem from './SpecializationItem';


const SpecializationCategory=()=> {
    const SpecializationListData = [
        {
            id:1,
            name: 'General Doctor',
            value:'general_practice',
            icon: require('../assets/generaldoctor.jpg')
        },

        {
            id:2,
            name: 'Cardiologist',
            value:'cardiology',
            icon: require('../assets/cardiologist.jpg')
        },

        {
            id:3,
            name: 'Oncologist',
            value:'oncology',
            icon: require('../assets/oncologist.jpg')
        },

        {
            id:4,
            name: 'Pediatrician',
            value:'pediatrics',
            icon: require('../assets/pediatrician.png')
        },

        {
            id:5,
            name: 'Gynaecologist',
            value:'gynaecology',
            icon: require('../assets/gynaecologist.jpg')
        },
    ];
 
    const [specialization, setSpecialization] = useState([]);

    useEffect(() => {
        setSpecialization(SpecializationListData)
    }, []);

  return (
    <div>
        <h2 className='text-[20px] mt-3 font-bold mb-3'>Select a Specialization.</h2>
        <div className='flex gap-6'>
            {specialization.map((item, index)=>(
                <div key={index}>
                    <SpecializationItem specialization={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SpecializationCategory