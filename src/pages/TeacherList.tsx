import React from 'react';
import { Link } from 'react-router-dom';

import './page-styles/TeacherList.css';

const logoImg = require('../images/logo.svg');
const backIcon = require('../images/icons/back.svg');

const TeacherList = () => {
	return (
		<div id='page-teacher-list' className='container'>
			<header className='page-header'>
				<div className='top-bar-container'>
					<Link to='/'>
						<img src={backIcon} alt='Voltar' />
					</Link>
					<img src={logoImg} alt='Proffy' />
				</div>

				<div className='header-content'>
					<strong>Estes são os proffys disponiveis!</strong>
				</div>
			</header>
		</div>
	);
};

export default TeacherList;
