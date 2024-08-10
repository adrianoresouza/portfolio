import dompurify from 'dompurify';

import styles from './Post.module.css';

function sanitizePost(body){
	let htmlSanitized = dompurify.sanitize(body);
	return (
		<div dangerouslySetInnerHTML={{__html: htmlSanitized}}/>
	)
}

export default function Post({ title, body }) {
	return (
		<div className={styles.postContainer}>
			<h1>{title}</h1>
			{sanitizePost(body)}
		</div>
	);
}