import React from 'react'
import useInput from './../../custom-hooks/useInput'
import Socket from './../../socket/index'
const CreateRoom = () => {
  const [input, handleChange] = useInput('')
  const handleSubmit = (e) => {
    Socket.emit('createGame', input)
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className='input field' name='roomInput' onChange={handleChange} />
      <input className='input button' type='submit' value='افزودن اتاق جدید' />
    </form>
  )
}

export default CreateRoom
