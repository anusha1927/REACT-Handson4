import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
	const [studentDetails] = useState([
		{
			name: 'John',
			age: '26',
			course: 'MERN',
			batch: 'October',
			change: 'Edit',
		},
		{
			name: 'Doe',
			age: '25',
			course: 'MERN',
			batch: 'November',
			change: 'Edit',
		},
		{
			name: 'Biden',
			age: '26',
			course: 'MERN',
			batch: 'September',
			change: 'Edit',
		},
		{
			name: 'Barar',
			age: '22',
			course: 'MERN',
			batch: 'September',
			change: 'Edit',
		},
		{
			name: 'Christ',
			age: '23',
			course: 'MERN',
			batch: 'October',
			change: 'Edit',
		},
		{
			name: 'Elent',
			age: '24',
			course: 'MERN',
			batch: 'November',
			change: 'Edit',
		},
		{
			name: 'Anusha',
			age: '22',
			course: 'MERN',
			batch: 'March',
			change: 'Edit',
		},
	]);
	return (
		<>
			<header>
				<div>
					<h1>Students Details</h1>
				</div>
				<div>
					<button>Add new student</button>
				</div>
			</header>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Course</th>
						<th>Batch</th>
						<th>Change</th>
					</tr>
				</thead>
				<tbody>
					{studentDetails.map((student, index) => {
						return (
							<tr key={index}>
								<td>{student.name}</td>
								<td>{student.age}</td>
								<td>{student.course}</td>
								<td>{student.batch}</td>
								<td>
									<Link to="#">{student.change}</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Students;
