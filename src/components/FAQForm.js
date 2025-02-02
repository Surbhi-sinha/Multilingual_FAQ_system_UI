import React, { useState } from 'react';
import axios from 'axios';
// import EditorComponent from '../components/EditorComponent';  // Assuming the CKEditor component is in the same folder

const FAQForm = () => {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [language, setLanguage] = useState('en');
	const [token, setToken] = useState(localStorage.getItem('token')); // Token retrieved from localStorage or context

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:5000/api/faqs',
				{
					question,
					answer,
					language
				},
				{
					headers: {
						'Authorization': `Bearer ${token}`  // Include the Bearer token in the header
					}
				}
			);
			alert('FAQ created:', response.data);
		} catch (error) {
			console.error('Error creating FAQ:', error);
		}
	};

	return (
		<div className='container p-5 mt-5 border'>
			<h3>Create FAQ</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Question</label>
					<input
						type="text"
						className="form-control"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label>Answer</label>
               <input
						type="text"
						className="form-control"
						value={answer}
						onChange={(e) => setAnswer(e.target.value)}
						required
					/>
					{/* <EditorComponent
						value={answer}
						onChange={setAnswer}
						onSave={(content) => setAnswer(content)}  // Save the editor content to the state
					/> */}
				</div>

				<div className="form-group">
					<label>Language</label>
					<select
						className="form-control"
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
					>
						<option value="en">English</option>
						<option value="bn">Bengali</option>
						<option value="hi">Hindi</option>
					</select>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit FAQ
				</button>
			</form>
		</div>
	);
};

export default FAQForm;
