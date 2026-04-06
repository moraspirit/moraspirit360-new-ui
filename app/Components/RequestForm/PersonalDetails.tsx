"use client"
import React from 'react'

interface services {
  photography : boolean,
  videography : boolean,
  webService : boolean,
  marketing : boolean,
}

interface personalDetails {
  name : string,
  contact : string,
  email : string,
  organization : string
}

interface personalDetailsProps {
  personalDetails : personalDetails,
  setPersonalDetails : React.Dispatch<personalDetails>,
  services : services,
  setServices : React.Dispatch<services>
  handleNext : () => void
}

const PersonalDetails : React.FC<personalDetailsProps> = ({personalDetails, setPersonalDetails, services, setServices, handleNext}) => {
 
  return (
    <>
        <h1 className=' text-4xl font-bold my-5 text-center'>Personal Details</h1>
        <form id='personalForm' className=' w-full flex flex-col items-center justify-start gap-10' onSubmit={(e) => e.preventDefault()}>
          <input 
            className=' typed-input' 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Name' 
            value={personalDetails.name}
            onChange={(e) => {setPersonalDetails({...personalDetails, name : e.target.value })}}
            required
          />
          <input 
            className=' typed-input remove-arrow' 
            type="tel" 
            name="contact" 
            id="contact" 
            placeholder='Contact' 
            inputMode='tel'
            value={personalDetails.contact}
            onChange={(e) => {setPersonalDetails({...personalDetails, contact : e.target.value })}}
            required
          />
          <input 
            className=' typed-input' 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email'
            value={personalDetails.email}
            onChange={(e) => {setPersonalDetails({...personalDetails, email : e.target.value })}}
            required
          />
          <input 
            className=' typed-input' 
            type="text" 
            name="organization" 
            id="organization" 
            placeholder='Organization'
            value={personalDetails.organization}
            onChange={(e) => {setPersonalDetails({...personalDetails, organization : e.target.value })}}
            required
          />

          <div className=' w-full flex flex-row flex-wrap'>
            <div className=' w-full md:w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
              <input 
                className=' checkbox-input' 
                type="checkbox" 
                name="photography" 
                id="photography" 
                checked={services.photography}
                onChange={(e) => {setServices( {...services, photography:!services.photography})}}
              />
              <label className=' form-label' htmlFor="photography">Photography</label>
            </div>
            <div className=' w-full md:w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
              <input 
                className=' checkbox-input' 
                type="checkbox" 
                name="videography" 
                id="videography" 
                checked={services.videography}
                onChange={(e) => {setServices( {...services, videography:!services.videography})}}
              />
              <label className=' form-label' htmlFor="videography">Videography </label>
            </div>
            <div className=' w-full md:w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
              <input 
                className=' checkbox-input' 
                type="checkbox" 
                name="webService" 
                id="webService" 
                checked={services.webService}
                onChange={(e) => {setServices( {...services, webService:!services.webService})}}
              />
              <label className=' form-label' htmlFor="webService">Web Service</label>
            </div>
            <div className=' w-full md:w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
              <input 
                className=' checkbox-input' 
                type="checkbox" 
                name="marketing" 
                id="marketing" 
                checked={services.marketing}
                onChange={(e) => {setServices( {...services, marketing:!services.marketing})}}
              />
              <label className=' form-label' htmlFor="marketing">Marketing</label>
            </div>
          </div>

          <button 
            className={` form-btn ${(services.marketing || services.photography || services.videography || services.webService) ? '' : 'cursor-not-allowed active:translate-y-0'}`}
            type='button'
            onClick={() => {
              const personalForm : HTMLFormElement = document.getElementById('personalForm') as HTMLFormElement;

              if(personalForm && personalForm.checkValidity()){
                handleNext()
              } else {
                personalForm?.reportValidity();
              }

            }}
            disabled={!(services.marketing || services.photography || services.videography || services.webService)}
          >
            Next
          </button>
        </form>

    </>
  )
}

export default PersonalDetails
