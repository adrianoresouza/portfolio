import { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import dompurify from 'dompurify';

import Header from "../../components/Header/Header";
import Post from '../../components/Post/Post';

import styles from './Blog.module.css';

const postsRef = collection(db, "posts");

export default function Blog() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isEmpty, setIsEmpty] = useState(false);

	useEffect(()=>{
		async function loadPosts(){
			const q = query(postsRef, orderBy('date', 'desc'));
			const querySnapshot = await getDocs(q);
			await updateState(querySnapshot);
			setLoading(false);
		}

		loadPosts();
		return () => {}
	}, []);

	async function updateState(querySnapshot){
		const isCollectionEmpty = querySnapshot.size === 0;
		let postList = [];
		if(!isCollectionEmpty){
			querySnapshot.forEach((doc) => {
				postList.push({
					title: doc.data().title,
					body: doc.data().body,
					date: doc.data().date.toString()
				})		
			});
			setPosts(posts => [...posts, ...postList]);
		}else{
			setIsEmpty(true);
		}
	}

	return (
		<>
			<Header/>
			<div className={styles.container}>
				<h1 className={styles.pageTitle}>BLOG</h1>
				{posts.map((item)=>{
					return(
						<div className={styles.post} key={item.date}>
							<Post title={item.title} body={item.body} />
						</div>
					)
				})}
			</div>
		</>
	);
}