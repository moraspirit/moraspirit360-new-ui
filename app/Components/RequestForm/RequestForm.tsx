'use client'

import React, { useEffect, useRef, useState } from 'react'
import PersonalDetails from './PersonalDetails'
import PhotographyDetails from './PhotographyDetails'
import VideographyDetails from './VideographyDetails'
import WebServiceDetails from './WebServiceDetails'
import MarketingDetails from './MarketingDetails'
import Message from '../Popup/Message'
import axios from 'axios'
import WaitingSpinner from '../Popup/WaitingSpinner'

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

interface photographyDetails {
    eventType : string,
    eventDate : string,
    location : string,
    mapLocation : string,
    startTime : string,
    endTime : string,
    agenda : File | null,
    attendees : string,
    photographers : string,
    imageUsage : string,
    imageUsageOther : string,
    needPublish : string,
    shotsDetails : string
} 

interface videographyDetails {
    eventDate : string,
    location : string,
    mapLocation : string,
    startTime : string,
    endTime : string,
    agenda : File | null,
    requirment : string,
    description : string,
}

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
    material : File | null,
    budget : string,
    paymentSchedule : string,
}

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

const defaultServices : services = {
    photography : false,
    videography : false,
    webService : false,
    marketing : false
}

const defaultPersonalDetails : personalDetails = {
    name: "",
    contact: '',
    email: '',
    organization: '',
}

const defaultPhotographyDetails : photographyDetails = {
    eventType : '',
    eventDate : '2024-01-01',
    location : '',
    mapLocation : '',
    startTime : '00:00',
    endTime : '00:00',
    agenda : null,
    attendees : '',
    photographers : '',
    imageUsage : '',
    imageUsageOther : '',
    needPublish : '',
    shotsDetails : ''
}

const defaultVideographyDetails : videographyDetails = {
    eventDate : '2024-01-01',
    location : '',
    mapLocation : '',
    startTime : '00:00',
    endTime : '00:00',
    agenda : null,
    requirment : '',
    description : ''
}

const defaultWebServiceDetails : webServiceDetails = {
    projectName : '',
    description : '',
    completionDate : '2024-01-01',
    systemType : {
        website : false,
        mobileApp : false,
        desktopSoftware : false,
        other : false
    },
    users : '',
    keyFeatures : '',
    userCount : '',
    lookAndFeel : '',
    example : '',
    material : null,
    budget : '',
    paymentSchedule : '',
}

const defaultMarketingDetails : marketingDetails = {
    eventName : '',
    description : '',
    eventDate : '',
    startTime : '',
    count : '',
    createBy : {
        own : false,
        _360 : false
    },
    publish : {
        own : false,
        _360 : false
    }
}

const RequestForm = () => {
    const [services, setServices] = useState({...defaultServices});
    const [personalDetails, setPersonalDetails] = useState({...defaultPersonalDetails});
    const [photographyDetails, setPhotographyDetails] = useState({...defaultPhotographyDetails});
    const [videographyDetails, setVideographyDetails] = useState({...defaultVideographyDetails});
    const [webServiceDetails, setWebServiceDetails] = useState({...defaultWebServiceDetails});
    const [marketingDetails, setMarketingDetails] = useState({...defaultMarketingDetails});
    const [selectedService, setSelectedService] = useState<String[]>(['personal']);
    const [shownForm, setShownForm] = useState(0);
    const parentDiv = useRef<HTMLDivElement | null>(null);
    const [formWidth, setFormWidth] = useState(0);
    const {showMessage, PopupMessage} = Message();
    const {Spinner, setWaiting} = WaitingSpinner();

    useEffect(() => {
        let tempServices = ['personal'];
        if(services.photography) tempServices.push('photography');
        if(services.videography) tempServices.push('videography');
        if(services.webService) tempServices.push('webService');
        if(services.marketing) tempServices.push('marketing');
        setSelectedService(tempServices);
    }, [services]);

    useEffect(() => {
        if(!parentDiv) return;
        const parent = parentDiv.current as HTMLDivElement;
        setFormWidth(parent.clientWidth);
    },[parentDiv]);

    const handleNext = () => {
        setShownForm(shownForm + 1);
    }

    const handleSubmit = () => {

        const requestData = new FormData();
        requestData.append('personalDetails', JSON.stringify(personalDetails));
        requestData.append('services', JSON.stringify(services));

        if(services.photography){
            requestData.append('photographyDetails', JSON.stringify(photographyDetails));
            requestData.append('photographyAgenda', photographyDetails.agenda as Blob);
        }

        if(services.videography){
            requestData.append('videographyDetails', JSON.stringify(videographyDetails));
            requestData.append('videographyAgenda', videographyDetails.agenda as Blob);
        }

        if(services.webService){
            requestData.append('webServiceDetails', JSON.stringify(webServiceDetails));
            requestData.append('material', webServiceDetails.material as Blob);
        }

        if(services.marketing){
            requestData.append('marketingDetails', JSON.stringify(marketingDetails));
        }

        setWaiting(true);

        axios.post('/api/service', requestData)
            .then(res => {
                showMessage(res.data.message, 'success');
            }).catch(err => {
                showMessage(err.response.data.message, 'error');
            }).finally(() => {
                setWaiting(false);
            });
    }

  return (
    <div className=' w-full h-full px-10 flex flex-col items-center justify-start text-white gap-5' ref={parentDiv}>
        <div className={`relative w-full h-full flex-1 overflow-hidden`}>
            <div 
                className={` absolute w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center transition-[translate] ease-out duration-500`} 
                style={{translate : `${shownForm == selectedService.indexOf('personal') ? '0' : (shownForm < selectedService.indexOf('personal') ? `${formWidth}px` : `-${formWidth}px`)}`}}
            >
                <PersonalDetails handleNext={handleNext} services={services} setServices={setServices} personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </div>
            {   services.photography &&
                <div 
                    className={` absolute w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center ${shownForm < selectedService.indexOf('photography') ? 'transition-none' : 'transition-[translate]'} ease-out duration-500`} 
                    style={{translate : `${shownForm == selectedService.indexOf('photography') ? '0' : (shownForm < selectedService.indexOf('photography') ? `${formWidth}px` : `-${formWidth}px`)}`}}
                >
                    <PhotographyDetails isLast={selectedService[selectedService.length - 1] == 'photography'} handleSubmit={handleSubmit} photographyDetails={photographyDetails} setPhotographyDetails={setPhotographyDetails} handleNext={handleNext} />        
                </div>
            }
            {   services.videography &&
                <div 
                    className={` absolute w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center ${shownForm < selectedService.indexOf('videography') ? 'transition-none' : 'transition-[translate]'} ease-out duration-500`} 
                    style={{translate : `${shownForm == selectedService.indexOf('videography') ? '0' : (shownForm < selectedService.indexOf('videography') ? `${formWidth}px` : `-${formWidth}px`)}`}}
                >
                    <VideographyDetails isLast={selectedService[selectedService.length - 1] == 'videography'} handleSubmit={handleSubmit} videographyDetails={videographyDetails} setVideographyDetails={setVideographyDetails} handleNext={handleNext} />        
                </div>
            }
            {   services.webService &&
                <div 
                    className={` absolute w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center ${shownForm < selectedService.indexOf('webService') ? 'transition-none' : 'transition-[translate]'} ease-out duration-500`} 
                    style={{translate : `${shownForm == selectedService.indexOf('webService') ? '0' : (shownForm < selectedService.indexOf('webService') ? `${formWidth}px` : `-${formWidth}px`)}`}}
                >
                    <WebServiceDetails isLast={selectedService[selectedService.length - 1] == 'webService'} handleSubmit={handleSubmit} webServiceDetails={webServiceDetails} setWebServiceDetails={setWebServiceDetails} handleNext={handleNext} />        
                </div>
            }
            {   services.marketing &&
                <div 
                    className={` absolute w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center ${shownForm < selectedService.indexOf('marketing') ? 'transition-none' : 'transition-[translate]'} ease-out duration-500`} 
                    style={{translate : `${shownForm == selectedService.indexOf('marketing') ? '0' : (shownForm < selectedService.indexOf('marketing') ? `${formWidth}px` : `-${formWidth}px`)}`}}
                >
                    <MarketingDetails isLast={selectedService[selectedService.length - 1] == 'marketing'} handleSubmit={handleSubmit} marketingDetails={marketingDetails} setMarketingDetails={setMarketingDetails} handleNext={handleNext} />        
                </div>
            }

            <PopupMessage />
            <Spinner />

        </div>        
    </div>
  )
}

export default RequestForm