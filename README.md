

# Frontend Setup Guide for FAQ System  

This guide will help you set up the frontend of the FAQ system, covering steps from installing dependencies to handling common issues related to CKEditor, API integration, and authentication.  

---

## 🚀 **1. Prerequisites**  
Make sure you have the following installed:  
- **Node.js** (version 14 or higher)  
- **npm** or **yarn**  
- Backend API running (refer to the backend README)  [refer here](https://github.com/Surbhi-sinha/Multilingual_FAQ_system)

---

## 📦 **2. Clone the Repository**  
```bash
git clone https://github.com/your-username/faq-system-frontend.git
cd faq-system-frontend
```  

---

## 📥 **3. Install Dependencies**  
```bash
npm install
# or
yarn install
```  

---


## 🖥️ **4. Running the Application**  
```bash
npm run dev
# or
yarn dev
```  
The application will run on `http://localhost:3000` by default.  

---

## 🔐 **6. Authentication Setup**  
We’re using localstorage for the jwt-token.  

### **Key Points:**  
- The token is stored in the app’s state, maintained through Context.  
- Ensure the login API response includes a valid JWT token.  
- Protected routes will automatically redirect unauthenticated users to the login page.  

---


## 📦 **7. Building for Production**  
```bash
npm run build
# or
yarn build
```  
To preview the production build locally:  
```bash
npm run preview
```  

---

## 🐞 **9. Common Issues & Fixes**  

### ⚡ **CORS Errors**  
- Make sure the backend allows requests from your frontend URL.  
- Check the browser console for CORS-related logs.  

### 🔑 **Token Issues**  
- Ensure the `Authorization` header is set correctly:  
  ```javascript
  Authorization: `Bearer ${token}`
  ```  
- If token-related errors occur after a refresh, verify that the token persists in Context properly.  


### UI   RESPONSES IN DIFFRENT LANGUAGE TRANSLATION:-
![Screenshot 2025-02-02 230008](https://github.com/user-attachments/assets/497bfef4-533d-42ee-ae2b-fbe97344f529)
![Screenshot 2025-02-02 230031](https://github.com/user-attachments/assets/c4756430-2bf5-4ccb-8981-23137979a8af)
![Screenshot 2025-02-02 230046](https://github.com/user-attachments/assets/4838ea99-620b-4b09-bf07-aae56d04bb76)

