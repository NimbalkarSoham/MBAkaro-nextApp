"use client";

import Image from "next/image";

import Card from "@/components/Card";
import Course from "@/components/Course";
import Perks from "@/components/Perks";
import Testimonial from "@/components/Testimonial";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   // Dynamically create script elements for chatbot
  //   const injectScript = document.createElement('script');
  //   injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  //   document.body.appendChild(injectScript);

  //   const configScript = document.createElement('script');
  //   injectScript.onload = () => {
  //     configScript.innerHTML = `

  //     window.botpressWebChat.init({
  //       "composerPlaceholder": "Chat with Customer-bot",
  //       "botConversationDescription": "helping ...",
  //       "botId": "0f3598c7-2e14-4959-8e54-303385d1558a",
  //       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
  //       "messagingUrl": "https://messaging.botpress.cloud",
  //       "clientId": "0f3598c7-2e14-4959-8e54-303385d1558a",
  //       "webhookId": "158e12e2-d796-4636-b200-99fa5952aebf",
  //       "lazySocket": true,
  //       "themeName": "prism",
  //       "botName": "Customer-bot",
  //       "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/a8aca2fa-5d95-4a28-ad4c-d9b6feda5eb5/v32284/style.css",
  //       "frontendVersion": "v1",
  //       "useSessionStorage": true,
  //       "theme": "prism",
  //       "themeColor": "#2563eb"
  //     });

  //   `;
  //     document.body.appendChild(configScript);
  //   };

  //   document.body.appendChild(injectScript);
  //   // Cleanup function to remove script elements when the component unmounts
  //   return () => {
  //     document.body.removeChild(injectScript);
  //   };
  // }, []);

  return (
    <div>
      <section className="header min-h-screen w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,9,30,0.7)] via-[rgba(4,9,30,0.7)] to-transparent">
          <Image
            src="/college.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="bg-gradient-to-t from-transparent via-transparent to-[rgba(4,9,30,0.7)]"
          />
        </div>

        <div className="text-box w-90 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-xl md:text-2xl lg:text-5xl  sm:text-4xl font-bold whitespace-nowrap">
            Unlock your potential with MbaKaro
          </h1>

          <p className="mb-8 text-sm md:text-base lg:text-lg">
            Here we provide consultancy and guidance for your successful career
          </p>
          <a
            href="./aboutus"
            className="inline-block text-white no-underline border border-white px-6 md:px-8 py-3 text-sm md:text-base bg-transparent hover:border-red-500 hover:bg-red-500 transition duration-500 ease-in-out rounded-md"
          >
            Visit us to know more
          </a>
        </div>
      </section>

      <section className="University max-w-screen-xl mx-auto text-center py-12 ">
        <h1 className="text-3xl font-semibold">Universities</h1>
        <p className="text-sm font-normal leading-6 py-2">
          Checkout the new courses and know more ...
        </p>

        <div className="row mt-5 flex flex-col justify-center md:flex-row md:justify-between md:space-x-4">
          <Card
            imageSrc="/nmims-university-logo.png"
            universityName="NMIMS UNIVERSITY"
            duration="2 years"
            fees="1,44,000"
          />

          <Card
            imageSrc="/dpu.png"
            universityName="D.Y. PATIL UNIVERSITY"
            duration="2 years"
            fees="1,40,200/-"
            pdfName="DYPATIL"
          />
          <Card
            imageSrc="/logo.png.webp"
            universityName="MANIPAL UNIVERSITY"
            duration="2 years"
            fees="1,66,000/-"
            pdfName="manipal"
          />
        </div>

        <div className="row mt-5 flex flex-col justify-center md:flex-row md:justify-between md:space-x-4">
          <Card
            imageSrc="/upgrad.png"
            universityName="UPGRADE INSTITUTION"
            duration="11 months"
            fees="2,50,000"
          />

          <Card
            imageSrc="/logo (3).png"
            universityName="AMITY UNIVERSITY"
            duration="2 years"
            fees="1,75,000/-"
            pdfName="Amity"
          />
          <Card
            imageSrc="/jain-logo.png"
            universityName="JAIN UNIVERSITY"
            duration="2 years"
            fees="75,000/-"
          />
        </div>

        <div className="row mt-5 flex flex-col justify-center md:flex-row md:justify-between md:space-x-4">
          <Card
            imageSrc="/logo (1).png"
            universityName="PARUL UNIVERSITY"
            duration="2 years"
            fees="90,000"
            pdfName="Parul"
          />

          <Card
            imageSrc="/gyan.png"
            universityName="SGV UNIVERSITY"
            duration="2 years"
            fees="58,000/-"
          />
          <Card
            imageSrc="/logo (2).png"
            universityName="WELINGKAR UNIVERSITY"
            duration="2 years"
            fees="81,000/-"
          />
        </div>
      </section>

      <section
        id="courses"
        className="courses max-w-screen-xl mx-auto text-center py-24 px-4 md:px-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <br />

        {/* <p className="text-sm font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}

        <div className="row mt-8 flex flex-col md:flex-row justify-between">
          <Course
            imageSrc="/courses/market management.png"
            courseTitle="Marketing Management"
          />
          <Course
            imageSrc="/courses/hr.png"
            courseTitle="Human Resource Management"
          />
          <Course
            imageSrc="/courses/finance.png"
            courseTitle="Finance Management"
          />
          <Course imageSrc="/courses/it.png" courseTitle="IT Management" />
        </div>
        <div className="row mt-8 flex flex-col md:flex-row justify-between">
          <Course
            imageSrc="/courses/analytics.png"
            courseTitle="Business Analytics"
          />
          <Course imageSrc="/courses/hr.png" courseTitle="Public Policy" />
          <Course
            imageSrc="/courses/hospital.png"
            courseTitle="Healthcare Management"
          />
          <Course
            imageSrc="/courses/inter business.png"
            courseTitle="Digital marketing and sales"
          />
        </div>
        <div className="row mt-8 flex flex-col md:flex-row justify-between">
          <Course
            imageSrc="/courses/fintech.png"
            courseTitle="Banking and financial services"
          />
          <Course
            imageSrc="/courses/business.png"
            courseTitle="Project Management"
          />
          <Course
            imageSrc="/courses/logistic.png"
            courseTitle="Artificial intelligence and machine learning"
          />
          <Course
            imageSrc="/courses/scm.png"
            courseTitle="Logistics and supply chain Management"
          />
        </div>
      </section>

      <section className="facility max-w-screen-xl mx-auto text-center py-24 px-4 md:px-12">
        <h1 className="text-4xl font-bold mb-4">Perks of MbaKaro</h1>
        <br />
        {/* <p className="text-sm font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam,
          nostrum iste aliquid provident aliquam autem repellat pariatur incidunt
          quas molestias earum enim corporis quod expedita vitae ducimus amet
          dolore.
        </p> */}
        <div className="row mt-10 flex flex-col md:flex-row justify-between space-x-4">
          <Perks
            imageSrc="/perks/consultancy.png"
            title="Complimentary Consultations"
            description="At MbaKaro, we are committed to supporting individuals on their journey to mental well-being. We offer a range of high-quality counseling services, including complimentary counseling sessions. Our team of experienced professionals is dedicated to providing accessible and compassionate care to help you navigate life's challenges. Take the first step towards a healthier, happier you with our no-cost counseling services."
          />
          <Perks
            imageSrc="/perks/faculty.png"
            title="Skilled Mentors"
            description="Meet our accomplished faculty—an assembly of seasoned educators dedicated to nurturing academic excellence. Our veteran instructors bring a wealth of experience, expertise, and passion to the learning environment. With a commitment to fostering growth and knowledge, our skilled mentors guide students on a transformative educational journey. Experience the difference of learning from a team of accomplished educators who are committed to your success."
          />
          <Perks
            imageSrc="/perks/support.png"
            title="Specialized Assistance"
            description="Experience the difference with our personalized support services. At MbaKaro, we understand that individual needs vary, and our dedicated team is here to provide tailored assistance to help you thrive. Whether you're a student, client, or customer, our commitment to personalized support ensures that your unique requirements are met with care and attention. Discover a customized approach to [your service or product] that puts your satisfaction and success at the forefront of everything we do."
          />
        </div>
      </section>
      <br />
      <br />
      <section className="testimonials max-w-screen-xl mx-auto text-center ">
        <h1 className="text-4xl font-bold mb-4 py-3">
          What does people say about us
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ipsum laudantium, illum dolores voluptas enim blanditiis assumenda odio
          et nesciunt eius labore. Assumenda at illo, accusantium laborum sit
          eveniet excepturi?
        </p> */}

        <div className="row flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="min-h-[300px]">
            <Testimonial
              imageSrc="/testimonials/User1.jpg"
              content="The MBAKaro website played a crucial role in my NMIMS journey. Its resources and networking helped shape my career. Now at CEAT Tyres, I apply the insights gained daily. Thanks to the MBAKaro for being my career companion!"
              userName="Kunal Jeughale"
              stars={4}
            />
          </div>
          <div className="min-h-[300px]">
            <Testimonial
              imageSrc="/testimonials/User2.jpg"
              content="The MBAKaro was a game-changer during my time at DPU's Marketing Management program. It offered crucial resources and networking that shaped my journey. Now, as a marketing professional, I continue to apply its insights daily. Thanks to the MBAKaro for being a key part of my success!"
              userName="Uddhav Pai"
              stars={3.5}
            />
          </div>
        </div>
      </section>
      <section
        className="cta bg-cover bg-center py-8 text-center rounded-md"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/college.png)",
          width: "70%",
          margin: "50px auto",
        }}
      >
        <h1 className="text-white text-4xl font-bold mb-8">
          Enroll course and know more
        </h1>
        <a
          href="./contactus"
          className="inline-block text-white no-underline border border-white px-8 py-3 text-sm bg-transparent hover:border-red-500 hover:bg-red-500 transition duration-500 ease-in-out rounded-md"
        >
          Contact us
        </a>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
