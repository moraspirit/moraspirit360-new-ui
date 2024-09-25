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

    let emailHTML = `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;">
            <tr>
                <td align="center" style="background-color: black; padding: 15px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 90%; text-align: left;">
                        <tr>
                            <td>
                                <img src="https://dms.uom.lk/s/HqaGE222rwGpkk6" alt="Logo" style="display: block; width: 50px; height: auto;" />
                            </td>
                            <td>
                                <h1 style="color: white; font-weight: bold; margin: 0; padding-left: 15px;">Moraspirit 360</h1>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-top: 15px;">
                    <table role="presentation" width="90%" cellpadding="0" cellspacing="0" style="width: 90%; text-align: left;">
                        <tr>
                            <td>
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem; margin-bottom: 10px;">Client Requested Services</h2>
                            </td>
                        </tr>
                        <tr style="padding-top: 10px;">
                            <td style="border-left: 5px solid blue; padding-left: 10px;">
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem; margin-top: 0;">Client Information</h2>
                                <p><b>Name:</b> ${personalDetails.name}</p>
                                <p><b>Contact:</b> ${personalDetails.contact}</p>
                                <p><b>Email:</b> ${personalDetails.email}</p>
                                <p><b>Organization:</b> ${personalDetails.organization}</p>
                                <p><b>Requested Services:</b> ${services.photography ? 'Photography' : ''} ${services.videography ? 'Videography' : ''} ${services.webService ? 'Web Service' : ''} ${services.marketing ? 'Marketing' : ''}</p>

                            
    `;

    if(services.photography){
        const photographyDetails = JSON.parse((body.get('photographyDetails') as string)) as photographyDetails;

        emailHTML += `
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem; margin-top: 0;">Photography Service</h2>
                                <p><b>Event Type:</b> ${photographyDetails.eventType}</p>
                                <p><b>Event Date:</b> ${photographyDetails.eventDate}</p>
                                <p><b>Location:</b> ${photographyDetails.location}</p>
                                <p><b>Map Location:</b> ${photographyDetails.mapLocation}</p>
                                <p><b>Start Time:</b> ${photographyDetails.startTime}</p>
                                <p><b>End Time:</b> ${photographyDetails.endTime}</p>
                                <p><b>Attendees :</b> ${photographyDetails.attendees}</p>
                                <p><b>Photographers:</b> ${photographyDetails.photographers}</p>
                                <p><b>Image Usage:</b> ${photographyDetails.imageUsage}</p>
                                <p><b>Image Usage Other:</b> ${photographyDetails.imageUsageOther}</p>
                                <p><b>Need Publish:</b> ${photographyDetails.needPublish}</p>
                                <p><b>Shots Details:</b> ${photographyDetails.shotsDetails}</p>

        `;
  
    }


    if(services.videography){
        const videographyDetails = JSON.parse((body.get('videographyDetails') as string)) as videographyDetails;

        emailHTML += `
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem;">Videography Service</h2>
                                <p><b>Event Date:</b> ${videographyDetails.eventDate}</p>
                                <p><b>Location:</b> ${videographyDetails.location}</p>
                                <p><b>Map Location:</b> ${videographyDetails.mapLocation}</p>
                                <p><b>Start Time:</b> ${videographyDetails.startTime}</p>
                                <p><b>End Time:</b> ${videographyDetails.endTime}</p>
                                <p><b>Requirment:</b> ${videographyDetails.requirment}</p>
                                <p><b>Description:</b> ${videographyDetails.description}</p>

        `;
    }

    if(services.webService){
        const webServiceDetails = JSON.parse((body.get('webServiceDetails') as string)) as webServiceDetails;

        emailHTML += `
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem;">Web Service</h2>
                                <p><b>Project Name:</b> ${webServiceDetails.projectName}</p>
                                <p><b>Description:</b> ${webServiceDetails.description}</p>
                                <p><b>Completion Date:</b> ${webServiceDetails.completionDate}</p>
                                <p><b>System Type:</b> ${webServiceDetails.systemType.website ? 'Website' : ''} ${webServiceDetails.systemType.mobileApp ? 'Mobile App' : ''} ${webServiceDetails.systemType.desktopSoftware ? 'Desktop Software' : ''} ${webServiceDetails.systemType.other ? 'Other' : ''}</p>
                                <p><b>Users:</b> ${webServiceDetails.users}</p>
                                <p><b>Key Features:</b> ${webServiceDetails.keyFeatures}</p>
                                <p><b>User Count:</b> ${webServiceDetails.userCount}</p>
                                <p><b>Look And Feel:</b> ${webServiceDetails.lookAndFeel}</p>
                                <p><b>Example:</b> ${webServiceDetails.example}</p>
                                <p><b>Budget:</b> ${webServiceDetails.budget}</p>
                                <p><b>Payment Schedule:</b> ${webServiceDetails.paymentSchedule}</p>

        `;
    }

    if(services.marketing){
        const marketingDetails = JSON.parse((body.get('marketingDetails') as string)) as marketingDetails;

        emailHTML += `
                                <h2 style="color: black; font-weight: bolder; font-size: 1.5rem;">Marketing Service</h2>
                                <p><b>Event Name:</b> ${marketingDetails.eventName}</p>
                                <p><b>Description:</b> ${marketingDetails.description}</p>
                                <p><b>Event Date:</b> ${marketingDetails.eventDate}</p>
                                <p><b>Start Time:</b> ${marketingDetails.startTime}</p>
                                <p><b>Count:</b> ${marketingDetails.count}</p>
                                <p><b>Create By:</b> ${marketingDetails.createBy.own ? 'Own' : ''} ${marketingDetails.createBy._360 ? '360' : ''}</p>
                                <p><b>Publish:</b> ${marketingDetails.publish.own ? 'Own' : ''} ${marketingDetails.publish._360 ? '360' : ''}</p>

        `;
    }

    emailHTML += `
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;

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
        to: `${personalDetails.email}, ${process.env.EMAIL}`,
        subject: 'Client Requested Services',
        html: emailHTML,
        attachments: emailAttachments
    };

    let response : NextResponse;

    try {
        await transporter.sendMail(mailOptions);
        response = new NextResponse('You have successfully requested MSP 360 services', { status: 200 });
    } catch (err) {
        response = new NextResponse('Internal Server Error, Try again later', { status: 500 });
    }

    return response;
}