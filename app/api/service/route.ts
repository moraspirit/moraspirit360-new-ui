const nodemailer = require('nodemailer');

require('dotenv').config();

import { NextResponse } from "next/server"

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

export const POST = async (request : Request) => {

    const body = await request.formData();

    const services = JSON.parse((body.get('services') as string)) as services;
    const personalDetails = JSON.parse((body.get('personalDetails') as string)) as personalDetails;



    let emailBody = `
        Personal Details\n
        Name : ${personalDetails.name}
        Contact : ${personalDetails.contact}
        Email : ${personalDetails.email}
        Organization : ${personalDetails.organization}
        Requested Services : ${services.photography ? 'Photography' : ''} ${services.videography ? 'Videography' : ''} ${services.webService ? 'Web Service' : ''} ${services.marketing ? 'Marketing' : ''}\n
    `;

    if(services.photography){
        const photographyDetails = JSON.parse((body.get('photographyDetails') as string)) as photographyDetails;
        emailBody += `
        Photography Details\n
        Event Type : ${photographyDetails.eventType}
        Event Date : ${photographyDetails.eventDate}
        Location : ${photographyDetails.location}
        Map Location : ${photographyDetails.mapLocation}
        Start Time : ${photographyDetails.startTime}
        End Time : ${photographyDetails.endTime}
        Attendees : ${photographyDetails.attendees}
        Photographers : ${photographyDetails.photographers}
        Image Usage : ${photographyDetails.imageUsage}
        Image Usage Other : ${photographyDetails.imageUsageOther}
        Need Publish : ${photographyDetails.needPublish}
        Shots Details : ${photographyDetails.shotsDetails}\n
        ` 
    }

    if(services.videography){
        const videographyDetails = JSON.parse((body.get('videographyDetails') as string)) as videographyDetails;
        emailBody += `
        Videography Details\n
        Event Date : ${videographyDetails.eventDate}
        Location : ${videographyDetails.location}
        Map Location : ${videographyDetails.mapLocation}
        Start Time : ${videographyDetails.startTime}
        End Time : ${videographyDetails.endTime}
        Requirment : ${videographyDetails.requirment}
        Description : ${videographyDetails.description}\n
        ` 
    }

    if(services.webService){
        const webServiceDetails = JSON.parse((body.get('webServiceDetails') as string)) as webServiceDetails;
        emailBody += `
        Web Service Details\n
        Project Name : ${webServiceDetails.projectName}
        Description : ${webServiceDetails.description}
        Completion Date : ${webServiceDetails.completionDate}
        System Type : ${webServiceDetails.systemType.website ? 'Website' : ''} ${webServiceDetails.systemType.mobileApp ? 'Mobile App' : ''} ${webServiceDetails.systemType.desktopSoftware ? 'Desktop Software' : ''} ${webServiceDetails.systemType.other ? 'Other' : ''}
        Users : ${webServiceDetails.users}
        Key Features : ${webServiceDetails.keyFeatures}
        User Count : ${webServiceDetails.userCount}
        Look And Feel : ${webServiceDetails.lookAndFeel}
        Example : ${webServiceDetails.example}
        Budget : ${webServiceDetails.budget}
        Payment Schedule : ${webServiceDetails.paymentSchedule}\n
        ` 
    }

    if(services.marketing){
        const marketingDetails = JSON.parse((body.get('marketingDetails') as string)) as marketingDetails;
        emailBody += `
        Marketing Details\n
        Event Name : ${marketingDetails.eventName}
        Description : ${marketingDetails.description}
        Event Date : ${marketingDetails.eventDate}
        Start Time : ${marketingDetails.startTime}
        Count : ${marketingDetails.count}
        Create By : ${marketingDetails.createBy.own ? 'Own' : ''} ${marketingDetails.createBy._360 ? '360' : ''}
        Publish : ${marketingDetails.publish.own ? 'Own' : ''} ${marketingDetails.publish._360 ? '360' : ''}\n
        ` 
    }

    const emailAttachments = [];

    if(services.photography) {

        const file = body.get('photographyAgenda') as File;
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        emailAttachments.push({
            filename: 'photography_agenda',
            content: fileBuffer,
            contentType : file.type
        });
    }

    if(services.videography) {

        const file = body.get('videographyAgenda') as File;
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        emailAttachments.push({
            filename: 'videography_agenda',
            content: fileBuffer,
            contentType : file.type
        });
    }

    if(services.webService) {

        const file = body.get('web_service_material') as File;
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        emailAttachments.push({
            filename: 'web_service_material',
            content: fileBuffer,
            contentType : file.type
        });
    }

    const transporter = await nodemailer.createTransport({
        secure : true,
        host : 'smtp.gmail.com',
        port : 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: personalDetails.email,
        subject: 'New Request',
        text: emailBody,
        attachments: emailAttachments
    };

    let response : NextResponse;

    transporter.sendMail(mailOptions, (err : any, info : any) => {
        if(err) {
            response = new NextResponse('Internal Server Error, Try again later', {status: 500});
        } else {
            response = new NextResponse('You have successfully requested MSP 360 services', {status: 200});
        }
    });
    
    return new NextResponse('it is working', {status: 200});
}