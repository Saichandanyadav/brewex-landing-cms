import React, { useState, useEffect } from 'react';
import './CMS.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CMS() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://chandan-brewex-landing-cms.onrender.com/api/heading')
      .then(res => res.json())
      .then(data => setText(data?.text || ''));
  }, []);

  const handleSubmit = async () => {
    await fetch('https://chandan-brewex-landing-cms.onrender.com/api/heading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    toast.success('Heading updated successfully!');
  };

  return (
    <div className="cms-container">
      <div className="cms-wrapper">
        <h2 className="cms-title">Admin: Update Home Page Heading</h2>
        <textarea
          className="cms-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="cms-button" onClick={handleSubmit}>
          Save Heading
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CMS;
