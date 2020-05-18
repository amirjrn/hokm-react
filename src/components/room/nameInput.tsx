import React, { useEffect, useState } from 'react'
import useInput from '../../custom-hooks/useInput'
import Socket from '../../socket/index'
const NameInput = ({ name, setName }) => {
  const [input, handleChange] = useInput(name)
  const [error, setError] = useState(false)
  function sendName() {
    Socket.emit('join', input, function (err) {
      if (err) {
        return setError(true)
      }
      // bug : calling set name here when name is present in local state cause it to dispath twice
      setName(input)
    })
  }
  const handleSubmit = (e) => {
    sendName()
    e.preventDefault()
  }
  useEffect(() => {
    if (input) {
      sendName()
    }
  }, [])
  return (
    <div>
      <div className='inputLabel'>
        {!error
          ? 'لطفا نام خود را وارد کنید'
          : 'این نام وجود دارد لطفا نام دیگری وارد کنید'}{' '}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className='input field'
          name='roomInput'
          onChange={handleChange}
          placeholder='نام'
        />
        <input className='input button' type='submit' value='ورود ' />
      </form>
    </div>
  )
}

export default NameInput
