import React from 'react';

export default function DownloadButton ({ data, fileName }) {
  const downloadJSON = () => {
    const jsonData = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const jsonURL = URL.createObjectURL(jsonData);
    const link = document.createElement('a');
    link.href = jsonURL;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button  onClick={downloadJSON} className="bg-button-color-red rounded-md text-white m-2 p-2 ">Download Report</button>
  );
}
