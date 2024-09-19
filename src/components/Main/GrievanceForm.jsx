import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import OTPSection from './OTPSection';
import SideBarMenu from './SideBarMenu';

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    mobileNo: '',
    journeyDetails: '',
    pnrNo: '',
    type: '',
    subType: '',
    incidentDate: '18/09/2024 17:09',
    file: null,
    grievanceDescription: '',
  });

  const [selectedMenu, setSelectedMenu] = useState('train');

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      mobileNo: '',
      journeyDetails: '',
      pnrNo: '',
      type: '',
      subType: '',
      incidentDate: '18/09/2024 17:09',
      file: null,
      grievanceDescription: '',
    });
  };

  const getFormFields = () => {
    switch (selectedMenu) {
      case 'train':
        return [
          { name: 'mobileNo', label: 'Mobile No.', type: 'text' },
          { name: 'journeyDetails', label: 'Journey Details', type: 'select', options: ['PNR'], required: true },
          { name: 'pnrNo', label: 'PNR No', type: 'text', required: true },
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      case 'station':
        return [
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      case 'appreciation':
        return [
          { name: 'incidentDate', label: 'Incident Date', type: 'date', value: formData.incidentDate, required: true },
          { name: 'file', label: 'Upload File', type: 'file' },
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      case 'enquiry':
        return [
          { name: 'grievanceDescription', label: 'Grievance Description', type: 'textarea', required: true },
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      case 'track':
        return [
          { name: 'file', label: 'Upload File', type: 'file' },
          { name: 'grievanceDescription', label: 'Grievance Description', type: 'textarea', required: true },
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      case 'suggestions':
        return [
          { name: 'grievanceDescription', label: 'Grievance Description', type: 'textarea', required: true },
          { name: 'type', label: 'Type', type: 'select', options: ['--Select--'], required: true },
          { name: 'subType', label: 'Sub Type', type: 'select', options: [], required: true },
        ];
      default:
        return [];
    }
  };

  return (
    <div className='flex'>
      <SideBarMenu onSelect={setSelectedMenu} selected={selectedMenu} />
      <div className="flex-1 flex justify-center py-6 md:py-10">
        <div className="w-full max-w-[740px] bg-white shadow-lg p-6 md:p-8 rounded-md">
          <h2 className="text-xl md:text-2xl font-bold text-rose-800 mb-4 md:mb-6">Grievance Detail</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:gap-6">
            {getFormFields().map((field) => (
              <FormField
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={(value) => handleInputChange(field.name, value)}
              />
            ))}
            <div className="flex flex-col md:flex-row justify-between mt-4">
              <Button type="submit" className="bg-rose-900 text-white w-full md:w-auto mb-2 md:mb-0">Submit</Button>
              <Button type="button" className="bg-gray-400 w-full md:w-auto" onClick={handleReset}>Reset</Button>
            </div>
            <div className="mt-4">
              <OTPSection/>
            </div>
            <p className="text-red-500 mt-2">* Mandatory Fields</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;
