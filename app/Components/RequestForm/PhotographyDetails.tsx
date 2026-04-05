import React from 'react'

interface photographyDetails {
    eventType : string,
    eventDate : string,
    location : string,
    mapLocation : string,
    startTime : string,
    endTime : string,
    attendees : string,
    photographers : string,
    imageUsage : string,
    imageUsageOther : string,
    needPublish : string,
    shotsDetails : string
} 

interface photographyDetailsProps {
    photographyDetails : photographyDetails,
    setPhotographyDetails : React.Dispatch<photographyDetails>,
    handleNext : () => void,
    handleSubmit : () => void,
    isLast? : boolean;
}

const PhotographyDetails : React.FC<photographyDetailsProps> = ({photographyDetails, setPhotographyDetails, handleNext, handleSubmit, isLast}) => {
    return (
        <>
            <h1 className=' text-4xl font-bold my-5 text-center'>Photography</h1>
            <form id='photographyForm' className=' w-full flex flex-col items-center justify-start gap-10' onSubmit={(e) => e.preventDefault()}>
              <input 
                className=' typed-input' 
                type="text" 
                name="eventType" 
                id="eventType" 
                placeholder='Event Type' 
                value={photographyDetails.eventType}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, eventType : e.target.value })}}
                required
              />
              <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Event Date</label>
                <input 
                  className=' typed-input flex-1'
                  type="date" 
                  name="eventDate" 
                  id="eventDate" 
                  value={photographyDetails.eventDate}
                  onChange={(e) => {setPhotographyDetails({...photographyDetails, eventDate : e.target.value})}}
                  required
                />
              </div>
              <input 
                className=' typed-input' 
                type="text" 
                name="location" 
                id="location" 
                placeholder='location' 
                value={photographyDetails.location}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, location : e.target.value })}}
                required
              />
              <input 
                className=' typed-input' 
                type="text" 
                name="mapLocation" 
                id="mapLocation" 
                placeholder='mapLocation' 
                value={photographyDetails.mapLocation}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, mapLocation : e.target.value })}}
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
                  value={photographyDetails.startTime}
                  onChange={(e) => {setPhotographyDetails({...photographyDetails, startTime : e.target.value })}}
                  required
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
                  value={photographyDetails.endTime}
                  onChange={(e) => {setPhotographyDetails({...photographyDetails, endTime : e.target.value })}}
                  required
                />
              </div>
              <input 
                className=' typed-input remove-arrow' 
                type="number" 
                name="attendees" 
                id="attendees" 
                placeholder=' Number of Event Attendees' 
                value={photographyDetails.attendees}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, attendees : e.target.value })}}
                required
              />
              <input 
                className=' typed-input remove-arrow' 
                type="number" 
                name="photographers" 
                id="photographers" 
                placeholder='Number of Photographers Need' 
                value={photographyDetails.photographers}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, photographers : e.target.value })}}
                required
              />
              <select 
                className=' select-input' 
                name="imageUsage" 
                id="imageUsage" 
                value={photographyDetails.imageUsage}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, imageUsage : e.target.value })}}
              >
                <option value="">HOW WOULD YOU LIKE TO USE THE IMAGES?</option>
                <option value="personal">For personal use only (print and social media)</option>
                <option value="web">For web only promotion including a credit line</option>
                <option value="printAndWeb">For print and web promotion without credit line</option>
                <option value="other">Other - Please specify</option>
              </select>
              <input 
                className=' typed-input' 
                type="text" 
                name="otherReason" 
                id="otherReason" 
                placeholder='Please Specify' 
                value={photographyDetails.imageUsageOther}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, imageUsageOther : e.target.value })}}
                required
              />
              <select 
                className=' select-input' 
                name="needPublish" 
                id="needPublish"
                value={photographyDetails.needPublish}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, needPublish : e.target.value })}}
              >
                <option value="">Are you comfortable with uploading the album to out 360 page ?</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
              <textarea 
                className=' textarea-input'
                name="shotsDetails" 
                id="shotsDetails" 
                rows={4}
                placeholder='Are there any must-have shots? will there be any set activities that
                          should be captured?' 
                value={photographyDetails.shotsDetails}
                onChange={(e) => {setPhotographyDetails({...photographyDetails, shotsDetails : e.target.value })}}
                required
              >
              </textarea>
              
              {
                isLast ?
                <button 
                  className=' form-btn'
                  type='button'
                  onClick={() => {
                    const photographyForm : HTMLFormElement = document.getElementById('photographyForm') as HTMLFormElement;
      
                    if(photographyForm && photographyForm.checkValidity()){
                      handleSubmit();
                    } else {
                      photographyForm?.reportValidity();
                    }
      
                  }}
                >
                  Submit
                </button> :
                <button 
                  className=' form-btn'
                  type='button'
                  onClick={() => {
                    const photographyForm : HTMLFormElement = document.getElementById('photographyForm') as HTMLFormElement;
      
                    if(photographyForm && photographyForm.checkValidity()){
                      handleNext()
                    } else {
                      photographyForm?.reportValidity();
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

export default PhotographyDetails
