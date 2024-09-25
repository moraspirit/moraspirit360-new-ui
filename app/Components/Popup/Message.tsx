'use client'

import React from 'react'

const Message = () => {

    const [message, setMessage] = React.useState<string>('');
    const [type, setType] = React.useState<string>('');
    const [show, setShow] = React.useState<boolean>(false);

    const showMessage = (message : string, type : string) => {
        setMessage(message);
        setType(type);
        setShow(true);
    }

  const PopupMessage:React.FC = () => {
     return (
        <div className={`${show? 'block' : 'hidden'} w-screen top-0 left-0 h-[100dvh] z-[100] flex items-center justify-center fixed`}>
            <div className=' relative w-full h-full flex items-center justify-center'>
                <div className='px-10 py-5 flex flex-col gap-3 items-center justify-start bg-black z-10 rounded-xl'>
                    <h1 className=' text-4xl'>{type == 'error'? 'ERROR' : (type == 'success' ? 'SUCCESS' : '')}</h1>
                    <p className=' text-lg max-w-[250px]'>{message}</p>
                    <button className=' form-btn' onClick={()=> setShow(false)}> Okay </button>
                </div>
                <div className=' absolute w-full h-full bg-white opacity-50 z-0'></div>
            </div>
        </div>
    )
    }

  return {
    showMessage,
    PopupMessage
    }

}

export default Message;