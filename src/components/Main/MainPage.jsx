import React, { useState } from 'react';
import cl from './main.module.scss';
import '../../index.scss';
import { Select, MenuItem } from '@mui/material';

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

  return (
    <div className='container'>
      <div className={cl.main_wrapper}>
        <h1>Contact us</h1>
        <p>The Voodoo team is looking forward to hearing from you!</p>
        <form className={cl.fields_block}>
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
    </div>
  )
}