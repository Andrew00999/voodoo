import React, { useState } from 'react';
import cl from './main.module.scss';
import '../../index.scss';
import { Select, MenuItem } from '@mui/material';
import { Map } from '../Map';
import { useJsApiLoader } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY);

export const MainPage = () => {
  const [practice, setPractice] = useState('');
  const [medical, setMedical] = useState('');
  const [inquiry, setInquiry] = useState('');

  const practiceChange = (event) => {
    setPractice(event.target.value);
  };
  const medicalChange = (event) => {
    setMedical(event.target.value);
  };
  const inquiryChange = (event) => {
    setInquiry(event.target.value);
  };

  const defaultCenter = {
    lat: 50.450001,
    lng: 30.523333
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  return (
    <div className='container'>
      <div className={cl.main_wrapper}>
        <div className={cl.main_content}>
          <h1>Contact us</h1>
          <p>The Voodoo team is looking forward to hearing from you!</p>
          <form className={cl.fields_block}>
            <div className={cl.desktop_container}>
              <div className={cl.desktop_wrapper}>
                <input type='text' placeholder='Full Name*' />
                <input type='text' placeholder='Title/Position*' />
                <Select
                  value={practice}
                  onChange={practiceChange}
                  displayEmpty
                  className={cl.customField}
                  sx={{ boxShadow: 'none', borderRadius: '0.5rem', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                >
                  <MenuItem value="">
                    <span>Practice / Institution*</span>
                  </MenuItem>
                  <MenuItem value={'item1'}>Item 1</MenuItem>
                  <MenuItem value={'item2'}>Item 2</MenuItem>
                  <MenuItem value={'item3'}>Item 3</MenuItem>
                </Select>
              </div>
              <div className={cl.desktop_wrapper}>
                <input type='text' placeholder='Email Address*' />
                <input type='number' placeholder='Phone Number*' />
                <Select
                  value={medical}
                  onChange={medicalChange}
                  displayEmpty
                  className={cl.customField}
                  sx={{ boxShadow: 'none', borderRadius: '0.5rem', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                >
                  <MenuItem value="">
                    <span>Medical Profession*</span>
                  </MenuItem>
                  <MenuItem value={'item1'}>Item 1</MenuItem>
                  <MenuItem value={'item2'}>Item 2</MenuItem>
                  <MenuItem value={'item3'}>Item 3</MenuItem>
                </Select>
              </div>
            </div>
            <Select
              value={inquiry}
              onChange={inquiryChange}
              displayEmpty
              className={cl.customField}
              sx={{ boxShadow: 'none', borderRadius: '0.5rem', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            >
              <MenuItem value="">
                <span>Type of Inquiry*</span>
              </MenuItem>
              <MenuItem value={'item1'}>Item 1</MenuItem>
              <MenuItem value={'item2'}>Item 2</MenuItem>
              <MenuItem value={'item3'}>Item 3</MenuItem>
            </Select>

            <textarea type='text' placeholder='Enter Message*' />
            <button>Send Message</button>
          </form>
        </div>
        <div className={cl.map_wrapper}>
          {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
        </div>
      </div>
    </div>
  )
}