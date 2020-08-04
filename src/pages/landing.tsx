import React from 'react';
import { Link } from 'react-router-dom';
// import logoImg from '../images/landing.svg';
import './page-styles/landing.css';
const logoImg = require('../images/logo.svg');
const landingImg = require('../images/landing.svg');
// webpack wont recognize "import" statement from SVGs aparently
//
// oh well
const studyIcon = require('../images/icons/study.svg');
const giveClassesIcon = require('../images/icons/give-classes.svg');
const purpleHeartIcon = require('../images/icons/purple-heart.svg');

const Landing = () => {
	return (
		<div id='page-landing'>
			<div id='page-landing-content' className='container'>
				<div className='logo-container'>
					<img src={logoImg} alt='' />
					<h2>Sua plataforma de estudos online</h2>
				</div>
				<img
					src={landingImg}
					alt='Plataforma de estudos'
					className='hero-image'
				/>
				<div className='buttons-container'>
					<Link to='/study' className='study'>
						<img src={studyIcon} alt='Estudar' />
						estudar
					</Link>
					<Link to='/give-class' className='give-classes'>
						<img src={giveClassesIcon} alt='Estudar' />
						dar aulas
					</Link>
				</div>
				<span className='total-connections'>
					total de 200 conexões ja feitas
					<img src={purpleHeartIcon} alt='coracao roxo' />
				</span>
			</div>
		</div>
	);
};

export default Landing;
