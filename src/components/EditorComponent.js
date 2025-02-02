import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
   ClassicEditor,
	Autoformat,
	AutoImage,
	Autosave,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	Heading,
	ImageBlock,
	ImageInsert,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	Paragraph,
	MediaEmbed,
	Table,
	TextTransformation,
	Underline
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
// import './App.css';

// Define the cloud service token URL and License Key
const LICENSE_KEY = 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzAwNzY3OTksImp0aSI6IjY0YjZhNzExLWNmYTktNDZkNy1hYWQzLTliZGU2OTA5NmMxNSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiNDQ1ZTAxOWEifQ.aUS19P-pg3kJyJTAA_XroQ8sEauH6frz0thCyU4JbyNhdH2IeJkK_RLxTJRfA9MfXip99xzkwXfV8Lk1ABG0hA';
const CLOUD_SERVICES_TOKEN_URL = 'your_cloud_service_token_url_here';

const EditorComponent = ({ value, onChange, onSave }) => {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);
		return () => setIsLayoutReady(false);
	}, []);

	const { editorConfig } = useMemo(() => {
		if (!isLayoutReady) {
			return {};
		}

		return {
			toolbar: [
				'heading', '|', 'bold', 'italic', 'underline', '|', 'link', 'insertImage', 'mediaEmbed', 'insertTable', 'blockQuote', '|',
				'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
			],
			plugins: [
				Autoformat,
				AutoImage,
				Autosave,
				BlockQuote,
				Bold,
				CloudServices,
				Essentials,
				Heading,
				ImageBlock,
				ImageInsert,
				ImageUpload,
				Indent,
				IndentBlock,
				Italic,
				Link,
				List,
				Paragraph,
				MediaEmbed,
				Table,
				TextTransformation,
				Underline
			],
			// cloudServices: {
			// 	tokenUrl: CLOUD_SERVICES_TOKEN_URL
			// },
			initialData: value || '<p>Write your content here...</p>',
			licenseKey: LICENSE_KEY
		};
	}, [isLayoutReady, value]);

	return (
		<div ref={editorContainerRef}>
			<CKEditor
				editor={ClassicEditor}
				config={editorConfig}
				data={value}
				onChange={(event, editor) => onChange(editor.getData())}
				onReady={editor => editorRef.current = editor}
			/>
			<button onClick={() => onSave(editorRef.current.getData())}>Save</button>
		</div>
	);
};

export default EditorComponent;
