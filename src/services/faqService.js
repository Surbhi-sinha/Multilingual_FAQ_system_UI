import axios from 'axios';

export const fetchFAQs = (language) => {
  return axios.get(`/api/faqs?lang=${language}`);
};

export const saveFAQ = (faqData) => {
  return axios.post('/api/faqs', faqData);
};
