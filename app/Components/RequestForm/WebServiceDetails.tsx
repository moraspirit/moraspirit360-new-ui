import React from 'react'


interface webServiceDetails {
    projectName : string,
    description : string,
    completionDate : string,
    systemType : {
        website : boolean,
        mobileApp : boolean,
        desktopSoftware : boolean,
        other : boolean
    },
    users : string,
    keyFeatures : string,
    userCount : string,
    lookAndFeel : string,
    example : string,
    budget : string,
    paymentSchedule : string,
}

interface webServiceDetailsProps {
    webServiceDetails : webServiceDetails,
    setWebServiceDetails : React.Dispatch<webServiceDetails>,
    handleNext : () => void,
    handleSubmit : () => void,
    isLast? : boolean;
}

const WebServiceDetails : React.FC<webServiceDetailsProps> = ({webServiceDetails, setWebServiceDetails, handleNext, handleSubmit, isLast}) => {
  return (
    <>
        <h1 className=' text-4xl font-bold my-5 text-center'>Web Service</h1>
        <form id='webServiceForm' className=' w-full flex flex-col items-center justify-start gap-10' onSubmit={(e) => e.preventDefault()}>
            <input 
                className=' typed-input' 
                type="text" 
                name="projectName" 
                id="projectName" 
                placeholder='Project Name' 
                value={webServiceDetails.projectName}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, projectName : e.target.value })}}
                required
            />
            <textarea 
                className=' textarea-input'
                name="description" 
                id="description" 
                rows={4}
                placeholder='Brief Description' 
                value={webServiceDetails.description}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, description : e.target.value })}}
                required
              >
            </textarea>
            <div className=' flex w-full flex-row justify-center items-center '>
                <label className=' text-gray-500 text-lg flex-1' htmlFor="date">Desired Completion Date</label>
                <input 
                  className=' typed-input flex-1'
                  type="date" 
                  name="completionDate" 
                  id="completionDate" 
                  value={webServiceDetails.completionDate}
                  onChange={(e) => {setWebServiceDetails({...webServiceDetails, completionDate : e.target.value})}}
                  required
                />
            </div>
            <div className=' w-full flex flex-row flex-wrap'>
                <div className=' w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="website" 
                    id="website" 
                    checked={webServiceDetails.systemType.website}
                    onChange={(e) => {setWebServiceDetails( {...webServiceDetails, systemType:{...webServiceDetails.systemType, website : !webServiceDetails.systemType.website}})}}
                />
                <label className=' form-label' htmlFor="website">Website</label>
                </div>
                <div className=' w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="mobileApp" 
                    id="mobileApp" 
                    checked={webServiceDetails.systemType.mobileApp}
                    onChange={(e) => {setWebServiceDetails( {...webServiceDetails, systemType:{...webServiceDetails.systemType, mobileApp : !webServiceDetails.systemType.mobileApp}})}}
                />
                <label className=' form-label' htmlFor="mobileApp">Mobile App</label>
                </div>
                <div className=' w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="desktopSoftware" 
                    id="desktopSoftware" 
                    checked={webServiceDetails.systemType.desktopSoftware}
                    onChange={(e) => {setWebServiceDetails( {...webServiceDetails, systemType:{...webServiceDetails.systemType, desktopSoftware : !webServiceDetails.systemType.desktopSoftware}})}}
                />
                <label className=' form-label' htmlFor="desktopSoftware">Desktop Software</label>
                </div>
                <div className=' w-1/2 flex flex-row gap-3 items-center justify-start my-2'>
                <input 
                    className=' checkbox-input' 
                    type="checkbox" 
                    name="other" 
                    id="other" 
                    checked={webServiceDetails.systemType.other}
                    onChange={(e) => {setWebServiceDetails( {...webServiceDetails, systemType:{...webServiceDetails.systemType, other : !webServiceDetails.systemType.other}})}}
                />
                <label className=' form-label' htmlFor="other">Other</label>
                </div>
            </div>
            <input 
                className=' typed-input' 
                type="text" 
                name="users" 
                id='users'
                placeholder="Users Will Use The System" 
                value={webServiceDetails.users}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, users : e.target.value })}}
                required
            />
            <input 
                className=' typed-input' 
                type="text" 
                name="keyFeatures" 
                id='keyFeatures'
                placeholder="Key Features You Need" 
                value={webServiceDetails.keyFeatures}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, keyFeatures : e.target.value })}}
                required
            />
            <input 
                className=' typed-input remove-arrow' 
                type="number" 
                name="userCount" 
                id="userCount" 
                placeholder=' Number of Users Do You Expect' 
                value={webServiceDetails.userCount}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, userCount : e.target.value })}}
                required
              />
            <select 
                className=' select-input' 
                name="lookAndFeel" 
                id="lookAndFeel"
                value={webServiceDetails.lookAndFeel}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, lookAndFeel : e.target.value })}}
            >
                <option value="">Look And Feel </option>
                <option value="modern">Modern</option>
                <option value="professional">Professional</option>
                <option value="fun">Fun</option>
                <option value="simple">Simple</option>
            </select>
            <input 
                className=' typed-input' 
                type="text" 
                name="example" 
                id="example" 
                placeholder='Any Example Images/Website Links'
                value={webServiceDetails.example}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, example : e.target.value })}}
                required
            />
            <input 
                className=' typed-input remove-arrow' 
                type="number" 
                name="budget" 
                id="budget" 
                placeholder=' Estimated Budget Range' 
                value={webServiceDetails.budget}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, budget : e.target.value })}}
              />
            <select 
                className=' select-input' 
                name="paymentSchedule" 
                id="paymentSchedule"
                value={webServiceDetails.paymentSchedule}
                onChange={(e) => {setWebServiceDetails({...webServiceDetails, paymentSchedule : e.target.value })}}
            >
                <option value="">Preffered Payment Schedule </option>
                <option value="onetime">One-time</option>
                <option value="milestones">Milestones</option>
            </select>
            {
            isLast ?
            <button 
                className=' form-btn'
                type='button'
                onClick={() => {
                    const webServiceForm : HTMLFormElement = document.getElementById('webServiceForm') as HTMLFormElement;
      
                    if(webServiceForm && webServiceForm.checkValidity()){
                      handleSubmit();
                    } else {
                      webServiceForm?.reportValidity();
                    }
      
                  }}
            >
                Submit
            </button> :
            <button 
                className=' form-btn'
                type='button'
                onClick={() => {
                    const webServiceForm : HTMLFormElement = document.getElementById('webServiceForm') as HTMLFormElement;
      
                    if(webServiceForm && webServiceForm.checkValidity()){
                      handleNext()
                    } else {
                      webServiceForm?.reportValidity();
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

export default WebServiceDetails
