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
import { motion } from 'framer-motion'


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
    const [selectedService, setSelectedService] = useState<string[]>(['personal']);
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
        setShownForm((prevShownForm) => prevShownForm + 1);
    }

    const handleSubmit = async () => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const staticFormEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
        const endpoint = backendUrl ? `${backendUrl}/forms/request` : staticFormEndpoint;

        if (!endpoint) {
            showMessage('Form endpoint is not configured. Add NEXT_PUBLIC_FORM_ENDPOINT.', 'error');
            return;
        }

        const requestData = new FormData();
        requestData.append('personalDetails', JSON.stringify(personalDetails));
        requestData.append('services', JSON.stringify(services));

        if(services.photography){
            requestData.append('photographyDetails', JSON.stringify(photographyDetails));
            if (photographyDetails.agenda) {
                requestData.append('photographyAgenda', photographyDetails.agenda);
            }
        }

        if(services.videography){
            requestData.append('videographyDetails', JSON.stringify(videographyDetails));
            if (videographyDetails.agenda) {
                requestData.append('videographyAgenda', videographyDetails.agenda);
            }
        }

        if(services.webService){
            requestData.append('webServiceDetails', JSON.stringify(webServiceDetails));
            if (webServiceDetails.material) {
                requestData.append('material', webServiceDetails.material);
            }
        }

        if(services.marketing){
            requestData.append('marketingDetails', JSON.stringify(marketingDetails));
        }

        if (!backendUrl) {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
            if (accessKey) {
                requestData.append('access_key', accessKey);
            }
            requestData.append('subject', 'New MoraSpirit 360 Request');
            requestData.append('from_name', personalDetails.name);
        }

        setWaiting(true);

        try {
            const res = await axios.post(endpoint, requestData, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const isSuccess = res.data?.success ?? true;
            if (isSuccess) {
                showMessage(res.data?.message ?? 'Request submitted successfully.', 'success');
                return;
            }
            showMessage(res.data?.message ?? 'Request submission failed.', 'error');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorMessage = err.response?.data?.message ?? err.message ?? 'Request submission failed.';
                showMessage(errorMessage, 'error');
            } else {
                showMessage('Unexpected error occurred while submitting request.', 'error');
            }
        } finally {
            setWaiting(false);
        }
    }

  return (
    <div className=' w-full h-full px-10 flex flex-col items-center justify-start text-white gap-5' ref={parentDiv}>
        {/* <div className={`relative w-full h-full flex-1 overflow-hidden`}>
            <div 
                className={` relative w-full h-screen sm:px-6 overflow-y-scroll no-scrollbar flex flex-col items-center transition-[translate] ease-out duration-500 ${shownForm == selectedService.indexOf('personal') ? 'z-10' : 'z-0'}`} 
                style={{translate : `${shownForm == selectedService.indexOf('personal') ? '0' : (shownForm < selectedService.indexOf('personal') ? `${formWidth}px` : `-${formWidth}px`)}`}}
            >
                <PersonalDetails handleNext={handleNext} services={services} setServices={setServices} personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </div>
            {   services.photography &&
                <div 
                    className={` relative w-full h-full px-6 overflow-y-scroll no-scrollbar flex flex-col items-center ${shownForm < selectedService.indexOf('photography') ? 'transition-none z-10' : 'transition-[translate] z-0'} ease-out duration-500`} 
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

        </div>         */}

        <div className={`w-full h-auto sm:h-screen sm:overflow-y-scroll ${selectedService[shownForm] == 'personal' ? 'block' : 'hidden'}`}>
            <motion.div
                initial={{ x : '0'}}
                animate={{ x : shownForm == selectedService.indexOf('personal') ? '0' : (shownForm < selectedService.indexOf('personal') ? `${formWidth}px` : `-${formWidth}px`)}}
                transition={{ duration : 0.5}}
                className=' w-full h-full flex flex-col items-center justify-start '
            >
                <PersonalDetails handleNext={handleNext} services={services} setServices={setServices} personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </motion.div>
        </div>

        <div className={`w-full h-auto sm:h-screen sm:overflow-y-scroll no-scrollbar ${selectedService[shownForm] == 'photography' ? 'block' : 'hidden'}`}>
            <motion.div
                initial={{ x : '0'}}
                animate={{ 
                    x : shownForm == selectedService.indexOf('photography') ? '0' : (shownForm < selectedService.indexOf('photography') ? `${formWidth}px` : `-${formWidth}px`),
                }}
                transition={{ duration : 0.5}}
                className=' w-full h-full flex flex-col items-center justify-start '
            >
                <PhotographyDetails isLast={selectedService[selectedService.length - 1] == 'photography'} handleSubmit={handleSubmit} photographyDetails={photographyDetails} setPhotographyDetails={setPhotographyDetails} handleNext={handleNext} />
            </motion.div>
        </div>

        <div className={`w-full h-auto sm:h-screen sm:overflow-y-scroll no-scrollbar ${selectedService[shownForm] == 'videography' ? 'block' : 'hidden'}`}>
            <motion.div
                initial={{ x : '0'}}
                animate={{ 
                    x : shownForm == selectedService.indexOf('videography') ? '0' : (shownForm < selectedService.indexOf('videography') ? `${formWidth}px` : `-${formWidth}px`),
                }}
                transition={{ duration : 0.5}}
                className=' w-full h-full flex flex-col items-center justify-start '
            >
                <VideographyDetails isLast={selectedService[selectedService.length - 1] == 'videography'} handleSubmit={handleSubmit} videographyDetails={videographyDetails} setVideographyDetails={setVideographyDetails} handleNext={handleNext} />
            </motion.div>
        </div>

        <div className={`w-full h-auto sm:h-screen sm:overflow-y-scroll no-scrollbar ${selectedService[shownForm] == 'webService' ? 'block' : 'hidden'}`}>
            <motion.div
                initial={{ x : '0'}}
                animate={{ 
                    x : shownForm == selectedService.indexOf('webService') ? '0' : (shownForm < selectedService.indexOf('webService') ? `${formWidth}px` : `-${formWidth}px`),
                }}
                transition={{ duration : 0.5}}
                className=' w-full h-full flex flex-col items-center justify-start '
            >
                <WebServiceDetails isLast={selectedService[selectedService.length - 1] == 'webService'} handleSubmit={handleSubmit} webServiceDetails={webServiceDetails} setWebServiceDetails={setWebServiceDetails} handleNext={handleNext} />
            </motion.div>
        </div>

        <div className={`w-full h-auto sm:h-screen sm:overflow-y-scroll no-scrollbar ${selectedService[shownForm] == 'marketing' ? 'block' : 'hidden'}`}>
            <motion.div
                initial={{ x : '0'}}
                animate={{ 
                    x : shownForm == selectedService.indexOf('marketing') ? '0' : (shownForm < selectedService.indexOf('marketing') ? `${formWidth}px` : `-${formWidth}px`),
                }}
                transition={{ duration : 0.5}}
                className=' w-full h-full flex flex-col items-center justify-start '
            >
                <MarketingDetails isLast={selectedService[selectedService.length - 1] == 'marketing'} handleSubmit={handleSubmit} marketingDetails={marketingDetails} setMarketingDetails={setMarketingDetails} handleNext={handleNext} />
            </motion.div>
        </div>
        
        <PopupMessage />
        <Spinner />

    </div>
  )
}

export default RequestForm
