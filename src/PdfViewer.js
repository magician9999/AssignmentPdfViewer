import React,{useState,useEffect} from 'react'
import {  LocalizationContext, LocalizationMap, Worker ,Viewer } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './PdfViewer.css';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import DropdownBox from './DropdownBox';


const PdfViewer = () => {



  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  


 
  
  const [pdfFile,setpdffile]=useState(null);
  const [viewPdf, setViewPdf]=useState(null);

  const { t } = useTranslation();
  
  //how many file types are allowed 
  const fileType = ['application/pdf']

  const handleChange=(e)=>{
    
    let selectedFile = e.target.files[0];
    if(selectedFile){
        if(selectedFile && fileType.includes(selectedFile.type))
        {
            let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = (e) =>
              {
                setpdffile('');
                setpdffile(e.target.result);
              }
        }
        else 
        {
            setpdffile('Not a valid pdf: Please select only PDF');
            setpdffile('');
        }

    }
    else 
    {
        console.log("please select a PDF");
    }
}
   
    const handleSubmit =(e) =>
      {
    
       e.preventDefault(); 
     
        if(pdfFile !==null) 
           {
            setViewPdf(pdfFile)
           }
       else {
        setViewPdf(null)
          }
        }
      





    return (
    
    <div className='container'>
        <h1 className="main-heading"><span>SWIPE</span> PDF Viewer</h1>
        <form onSubmit={handleSubmit}>
            <input type='file' className='form-control' onChange={handleChange}/>
            <div className='dropandsubmit'>
              <button type='submit' className='btn btn-success'>View PDF</button>
              <DropdownBox/>
           </div>
        </form>

      <h2>View PDF</h2>
      <div className = "pdf-container">
        
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            {viewPdf && <> 
                   <Viewer 
                   fileUrl={viewPdf}
                  
                   plugins={[defaultLayoutPluginInstance]}
                   />
                  </>}
                {!viewPdf && <>No PDF</>}
        </Worker>
        
      </div>
      </div>
    );
};

export default PdfViewer;
