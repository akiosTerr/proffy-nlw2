import React from 'react';
import { Link } from 'react-router-dom';

import './component-style/PageHeader.css';
const logoImg = require('../images/logo.svg');
const backIcon = require('../images/icons/back.svg');

interface PageHeaderProps {
	title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
	return (
		<header className='page-header'>
			<div className='top-bar-container'>
				<Link to='/'>
					<img src={backIcon} alt='Voltar' />
				</Link>
				<img src={logoImg} alt='Proffy' />
			</div>

			<div className='header-content'>
				<strong>{title}</strong>
				{children}
			</div>
		</header>
	);
};

export default PageHeader;
