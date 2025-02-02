import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import LanguageSwitcher from '../components/LangSwitcher';
import { LanguageContext } from '../context/LangContext';  // Import the LangContext
import FAQForm from '../components/FAQForm';
const FAQComponent = () => {
   const { language } = useContext(LanguageContext); // Get the current language from context
   const [faqs, setFaqs] = useState([]);  // State to store fetched FAQs

   // Fetch FAQs whenever the language changes
   useEffect(() => {
      const fetchFAQs = async () => {
         try {
            let url = 'http://localhost:5000/api/faqs/';
            if (language !== 'en') {
               url = `http://localhost:5000/api/faqs/?lang=${language}`;
            }

            const response = await axios.get(url);
            setFaqs(response.data); // Set the FAQs received from API
         } catch (error) {
            console.error('Error fetching FAQs:', error);
         }
      };

      fetchFAQs();
   }, [language]);  // Re-fetch FAQs when the language changes

   return (
      <div className='container mt-5'>

         <div className='row'>
            <div className="col-md-7">

               <h3>Frequently Asked Questions</h3>
               <div className='list-group'>
                  {faqs.map((faq, index) => (
                     <div key={index} className='list-group-item'>
                        <h5>{faq.question}</h5>
                        <p>{faq.answer}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="col-md-3 text-end">
               <LanguageSwitcher />

            </div>
         </div>

         <div>
            <FAQForm/>
         </div>
      </div>
   );
};

export default FAQComponent;
