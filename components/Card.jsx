import React from 'react';

const Card = ({ imageSrc, universityName, duration, fees, pdfName }) => {
  const handleDownload = () => {
    // Assuming your PDFs are stored in the public/pdf/ directory
    const pdfUrl = `/pdf/${pdfName}.pdf`;

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${universityName}_Brochure.pdf`;
    
    // Trigger the click event to start the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-basis-[45%] bg-gray-100 rounded-md mb-8 p-4 box-border transition duration-300 ease-in-out hover:shadow-md hover:bg-gray-300 transform hover:scale-105">
      <img src={imageSrc} alt={universityName} className="max-w-full h-28 object-contain mb-2 mx-auto" />
      <br />
      <h3 className="text-center font-bold my-1 text-sm">{universityName}</h3>
      <p className="text-xs font-light leading-4 mb-2">
        {universityName} has achieved a remarkable position in the top 100 ranking by NIRF, emphasizing its
        recognition and stature among the best educational institutions in India.
        <br /><b >Course Duration – {duration}</b><br /><b>Course fees – {fees}</b>
      </p>
      <br />
      <button
        onClick={handleDownload}
        className="inline-block text-black no-underline border border-gray-900 px-8 py-3 text-sm bg-transparent hover:border-gray-500 hover:bg-gray-500 transition duration-500 ease-in-out rounded-md"
      >
        Download
      </button>
    </div>
  );
}

export default Card;
