// emailService.js
import emailjs from 'emailjs-com';

emailjs.init("HRtLV15DWQFnYZvFQ"); // Replace with your actual EmailJS user ID

const sendMail = async (params) => {
  const serviceID = "service_juwpvyu";
  const templateID = "template_4np9sla";

  try {
    const response = await emailjs.send(serviceID, templateID, params);
    return response;
  } catch (error) {
    throw error;
  }
};

export default sendMail;
