import React from 'react'


interface videographyDetails {
    eventDate : string,
    location : string,
    mapLocation : string,
    startTime : string,
    endTime : string,
    requirment : string,
    description : string,
}

interface videographyDetailsProps {
    videographyDetails : videographyDetails,
    setVideographyDetails : React.Dispatch<videographyDetails>,
    handleNext : () => void,
    handleSubmit : () => void,
    isLast? : boolean;
}

const VideographyDetails : React.FC<videographyDetailsProps> = ({videographyDetails, setVideographyDetails, handleNext, handleSubmit, isLast}) => {
  return (
    <>
        <h1 className=' text-4xl font-bold my-5 text-center'>Videography</h1>
        <form id='videographyForm' className=' w-full flex flex-col items-center justify-start gap-10' onSubmit={(e) => e.preventDefault()}>
        <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Event Date</label>
                <input 
                  className=' typed-input flex-1'
                  type="date" 
                  name="eventDate" 
                  id="eventDate" 
                  value={videographyDetails.eventDate}
                  onChange={(e) => {setVideographyDetails({...videographyDetails, eventDate : e.target.value})}}
                />
              </div>
              <input 
                className=' typed-input' 
                type="text" 
                name="location" 
                id="location" 
                placeholder='location' 
                value={videographyDetails.location}
                onChange={(e) => {setVideographyDetails({...videographyDetails, location : e.target.value })}}
                required
              />
              <input 
                className=' typed-input' 
                type="text" 
                name="mapLocation" 
                id="mapLocation" 
                placeholder='mapLocation' 
                value={videographyDetails.mapLocation}
                onChange={(e) => {setVideographyDetails({...videographyDetails, mapLocation : e.target.value })}}
                required
              />
              <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Event Start Time</label>
                <input 
                  className=' typed-input flex-1'
                  type="time" 
                  name="startTime" 
                  id="startTime"
                  placeholder='startTime'
                  value={videographyDetails.startTime}
                  onChange={(e) => {setVideographyDetails({...videographyDetails, startTime : e.target.value })}}
                />
              </div>
              <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Event End Time</label>
                <input 
                  className=' typed-input flex-1'
                  type="time" 
                  name="endTime" 
                  id="endTime"
                  placeholder='endTime'
                  value={videographyDetails.endTime}
                  onChange={(e) => {setVideographyDetails({...videographyDetails, endTime : e.target.value })}}
                />
              </div>
              <select 
                className=' select-input' 
                name="needPublish" 
                id="needPublish"
                value={videographyDetails.requirment}
                onChange={(e) => {setVideographyDetails({...videographyDetails, requirment : e.target.value })}}
              >
                <option value="">Select Your Requirment</option>
                <option value="videography">Videography</option>
                <option value="liveStream">Live Stream</option>
                <option value="both">Both</option>
              </select>
              <textarea 
                className=' textarea-input'
                name="shotsDetails" 
                id="shotsDetails" 
                rows={4}
                placeholder='Description' 
                value={videographyDetails.description}
                onChange={(e) => {setVideographyDetails({...videographyDetails, description : e.target.value })}}
                required
              >
              </textarea>
          {
            isLast ?
            <button 
              className=' form-btn'
              type='button'
              onClick={() => {
                const videographyForm : HTMLFormElement = document.getElementById('videographyForm') as HTMLFormElement;
  
                if(videographyForm && videographyForm.checkValidity()){
                  handleSubmit();
                } else {
                  videographyForm?.reportValidity();
                }
  
              }}
            >
              Submit
            </button> :
            <button 
              className=' form-btn'
              type='button'
              onClick={() => {
                const videographyForm : HTMLFormElement = document.getElementById('videographyForm') as HTMLFormElement;
  
                if(videographyForm && videographyForm.checkValidity()){
                  handleNext()
                } else {
                  videographyForm?.reportValidity();
                }
  
              }}
            >
              Next
            </button>
          }
        </form>

    </>
  )
}

export default VideographyDetails
