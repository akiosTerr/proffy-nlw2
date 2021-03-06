import React from 'react';

import './page-styles/TeacherList.css';
import PageHeader from '../components/PageHeader';
import TeacherItem from '../components/TeacherItem';

const TeacherList = () => {
	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponiveis'>
				<form id='search-teachers'>
					<div className='input-block'>
						<label htmlFor='subject'>Matéria</label>
						<input type='text' id='subject' />
					</div>
					<div className='input-block'>
						<label htmlFor='week-day'>Dia da semana</label>
						<input type='text' id='week-day' />
					</div>
					<div className='input-block'>
						<label htmlFor='time'>Horario</label>
						<input type='text' id='time' />
					</div>
				</form>
			</PageHeader>
			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	);
};

export default TeacherList;
