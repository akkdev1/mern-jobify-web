import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Warpper from '../assets/wrappers/RegisterPage' //เรียกใช้ componetn รูปแบบ Warp Page  ในการ Zoom Page เข้าออก

//  ทำการ Initial ค่าตัวแปร State ที่ใช้งานใน Page ไว้ด้านบนสุด ก่อนฟังก์ชั่น Component  
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true,
}

//==================================================
const Register = () => {

    const [value, setValue] = useState(initialState)

    //ฟังก์ชั่นจับการป้อนข้อมูล
    const handleChange = (e) => {
        console.log(e.target)
    }

    //ฟังก์ชั่นการกดปุ่ม 
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    //=====================Render View=================================
    return (
        <Warpper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>LogIn</h3>
                {value.showAlert && <Alert />}

                {/* ใส่ค่า Name Input */}
                <FormRow
                    type='text'
                    name='name'
                    value={value.name}
                    handleChange={handleChange}
                />

                {/* ใส่ค่า Email Input */}
                <FormRow
                    type='email'
                    name='email'
                    value={value.email}
                    handleChange={handleChange}
                />

                {/* ใส่ค่า Password Input */}
                <FormRow
                    type='password'
                    name='password'
                    value={value.password}
                    handleChange={handleChange}
                />
                <button type='submit' className='btn btn-block'>
                    Login
                </button>
            </form>
        </Warpper>
    )
}
export default Register
