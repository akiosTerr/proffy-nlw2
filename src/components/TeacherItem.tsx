import React from 'react';
import './component-style/TeacherItem.css';

const whatsappicon = require('../images/icons/whatsapp.svg');

const TeacherItem = () => {
	return (
		<article className='teacher-item'>
			<header>
				<img
					src='https://avatars1.githubusercontent.com/u/8533742?s=460&u=5b924248a71da30c1d9298a418d7a9b52a419d39&v=4'
					alt='Luiz'
				/>
				<div>
					<strong>Luiz Fernando</strong>
					<span>Física quântica molecular</span>
				</div>
			</header>
			<p>
				Físico Teorico PHD, especialista em mecanicas quânticas, ganhador do
				premio nobel de física de 2093 por hackear a matrix e descobrir a prova
				real de que a realidade é só uma simulação.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 630</strong>
				</p>
				<button type='button'>
					<img src={whatsappicon} alt='Entrar em contato' />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
