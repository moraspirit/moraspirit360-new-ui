import React from 'react'

interface marketingDetails {
    eventName : string,
    description : string,
    eventDate : string,
    startTime : string,
    count : string,
    createBy : {
        own : boolean,
        _360 : boolean
    },
    publish : {
        own : boolean,
        _360 : boolean
    }
}

interface marketingDetailsProps {
    marketingDetails : marketingDetails,
    setMarketingDetails : React.Dispatch<marketingDetails>,
    handleNext : () => void,
    handleBack : () => void,
    handleSubmit : () => void,
    isLast? : boolean,
}

const marketingDetails : React.FC<marketingDetailsProps> = ({marketingDetails, setMarketingDetails, handleNext, handleBack, handleSubmit, isLast}) => {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const nowLocal = `${today}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  return (
    <>
        <h1 className=' text-4xl font-bold my-5'>Marketing</h1>
        <form id='marketingForm' className=' w-full flex flex-col items-center justify-start gap-10' onSubmit={(e) => e.preventDefault()}>
            <input 
                className=' typed-input' 
                type="text" 
                name="eventName" 
                id="eventName" 
                placeholder='Event Name' 
                value={marketingDetails.eventName}
                onChange={(e) => {setMarketingDetails({...marketingDetails, eventName : e.target.value })}}
                required
              />
              <textarea 
                className=' textarea-input'
                name="description" 
                id="description" 
                rows={4}
                placeholder='Event Description'
                value={marketingDetails.description}
                onChange={(e) => {setMarketingDetails({...marketingDetails, description : e.target.value })}}
                required
              >
              </textarea>
              <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Event Date</label>
                <input 
                  className=' typed-input flex-1'
                  type="date" 
                  name="eventDate" 
                  id="eventDate" 
                  min={today}
                  value={marketingDetails.eventDate}
                  onChange={(e) => {setMarketingDetails({...marketingDetails, eventDate : e.target.value})}}
                />
              </div>
              <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">When Should We Start Marketing</label>
                <input 
                  className=' typed-input flex-1'
                  type='datetime-local' 
                  name="startTime" 
                  id="startTime" 
                  min={nowLocal}
                  value={marketingDetails.startTime}
                  onChange={(e) => {setMarketingDetails({...marketingDetails, startTime : e.target.value})}}
                />
              </div>
              <input 
                className=' typed-input remove-arrow' 
                type="number" 
                name="count" 
                id="count" 
                placeholder=' Flyer/Video Count' 
                inputMode='numeric'
                min={0}
                step={1}
                value={marketingDetails.count}
                onChange={(e) => {
                  setMarketingDetails({
                    ...marketingDetails,
                    count : e.target.value.replace(/\D/g, ''),
                  });
                }}
                required
              />
              <div className=' w-full flex flex-row flex-wrap'>
                <div className=' w-full flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="ownDesigners" 
                    id="ownDesigners" 
                    checked={marketingDetails.createBy.own}
                    onChange={(e) => {setMarketingDetails( {...marketingDetails, createBy : {...marketingDetails.createBy, own : !marketingDetails.createBy.own }})}}
                />
                <label className=' form-label' htmlFor="photography">Created By Your Own Designers</label>
                </div>
                <div className=' w-full flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="360Designers" 
                    id="360Designers" 
                    checked={marketingDetails.createBy._360}
                    onChange={(e) => {setMarketingDetails( {...marketingDetails, createBy : {...marketingDetails.createBy, _360 : !marketingDetails.createBy._360 }})}}
                />
                <label className=' form-label' htmlFor="photography">Created By Your 360 Designers</label>
                </div>
              </div>
              <div className=' w-full flex flex-row flex-wrap'>
                <div className=' w-full flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="ownPage" 
                    id="ownPage" 
                    checked={marketingDetails.publish.own}
                    onChange={(e) => {setMarketingDetails( {...marketingDetails, publish : {...marketingDetails.publish, own : !marketingDetails.publish.own }})}}
                />
                <label className=' form-label' htmlFor="photography">Publish to Own Page</label>
                </div>
                <div className=' w-full flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="360Page" 
                    id="360Page" 
                    checked={marketingDetails.publish._360}
                    onChange={(e) => {setMarketingDetails( {...marketingDetails, publish : {...marketingDetails.publish, _360 : !marketingDetails.publish._360 }})}}
                />
                <label className=' form-label' htmlFor="photography">Publish to 360 Page</label>
                </div>
              </div>

            <div className='w-full flex items-center justify-between gap-4'>
              <button
                className='form-btn w-full bg-transparent border border-white/50'
                type='button'
                onClick={handleBack}
              >
                Back
              </button>
              {
              isLast ?
              <button 
                  className=' form-btn w-full'
                  type='button'
                  onClick={() => {
                    const marketingForm : HTMLFormElement = document.getElementById('marketingForm') as HTMLFormElement;
      
                    if(marketingForm && marketingForm.checkValidity()){
                      handleSubmit();
                    } else {
                      marketingForm?.reportValidity();
                    }
      
                  }}
              >
                  Submit
              </button> :
              <button 
                  className=' form-btn w-full'
                  type='button'
                  onClick={() => {
                    const marketingForm : HTMLFormElement = document.getElementById('marketingForm') as HTMLFormElement;
      
                    if(marketingForm && marketingForm.checkValidity()){
                      handleNext()
                    } else {
                      marketingForm?.reportValidity();
                    }
      
                  }}
              >
                  Next
              </button>
              }
            </div>
        </form>

    </>
  )
}

export default marketingDetails
