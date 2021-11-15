import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Form from './component/Form';
import Profile from './component/Profile';

const userAPI = axios.create({
	baseURL: 'https://api.github.com/search/'
});

function App() {
	const [ userList, setUserList ] = useState([]);
	const [ text, setText ] = useState('');

	const getUsers = async (userName) => {
		const users = await userAPI.get('/users', {
			params: {
				q: userName
			}
		});
		return users.data;
	};

	const showUsers = () => {};

	useEffect(
		() => {
			showUsers();
		},
		[ userList ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const users = await getUsers(text);
		console.log(users);
		const items = users.items.map(({ login, avatar_url, id }) => ({ img: avatar_url, name: login, id }));
		setUserList(items);
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setText(value);
	};

	return (
		<div className='App'>
			<h1>Enter a name to find</h1>
			<Form text={text} handleText={handleChange} findUser={handleSubmit} />
			<Profile list={userList} />
		</div>
	);
}

export default App;