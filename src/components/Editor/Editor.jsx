import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { db, storage} from '../../services/firebaseConnection';
import {
	getDownloadURL,
	ref as storageRef,
	uploadBytes,
  } from "firebase/storage";
import { doc, setDoc, collection } from 'firebase/firestore';
import Header from '../../components/Header/Header';
import styles from './Editor.module.css';

export default function PostEditor() {
	const editorRef = useRef(null);
	const [titulo, setTitulo] = useState('');
	const [imageUpload, setImageUpload] = useState(null);

	async function handleSavePost(){
		if (editorRef.current) {
			const content = editorRef.current.getContent();
			console.log('body', content);
			let currentTime = new Date();
			//const postRef = doc(db, 'posts', '1');
			const postRef = doc(collection(db, 'posts'));
			const post = {
				title: titulo,
				date: currentTime,
				body: content
			}
			await setDoc(postRef, post)
			.then(()=>{
				console.log('tudoc certo')
			})
		}
	}

	const handleUpload = (blobInfo, progress) =>{
		return new Promise((resolve, reject)=>{
			let image = blobInfo.blob();
			let imageName = blobInfo.filename();
			let timeStap = new Date;

			const filePath = `images/${timeStap}/${imageName}`;

			const imageRef = storageRef(storage, filePath);

			const uploadTask = uploadBytes(imageRef, image)
			.then((snapshot) => {
				console.log('enviado com sucesso')
				getDownloadURL(snapshot.ref).then(async (downloadURL) => { 
					resolve(downloadURL);
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
		});
	}

	return (
		<>
			<Header/>
		<div className={styles.container}>
			<h1>Monte sua postagem</h1>
			<div className={styles.areaTitulo}>
				<label>Titulo</label>
				<input type='text' onChange={(e)=>setTitulo(e.target.value)}/>
			</div>			
			<Editor
				apiKey='js6esakmphf64shxvrhv29wqf2feh6cwlddjhbmo0gak31cr'
				tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
				onInit={(evt, editor) => editorRef.current = editor}
				initialValue=''
				init={{
				height: 500,
				menubar: false,
				plugins: [
					'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
					'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
					'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
				],
				toolbar: 'undo redo | blocks | ' +
					'bold italic forecolor | alignleft aligncenter ' +
					'alignright alignjustify | bullist numlist outdent indent | ' +
					'removeformat | image | help |',
				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
				images_upload_handler: handleUpload
				}}
      		/>
      		<button className={styles.saveButton} onClick={handleSavePost}>Salvar Post</button>
		</div>
		</>
	);
}