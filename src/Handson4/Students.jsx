import React, { useState } from 'react';

const Students = () => {
	const [studentDetails] = useState([
		{
			name: 'John',
			age: '26',
			course: 'MERN',
			batch: 'October',
		},
		{
			name: 'Doe',
			age: '25',
			course: 'MERN',
			batch: 'November',
		},
		{
			name: 'Biden',
			age: '26',
			course: 'MERN',
			batch: 'September',
		},
		{
			name: 'Barar',
			age: '22',
			course: 'MERN',
			batch: 'September',
		},
		{
			name: 'Christ',
			age: '23',
			course: 'MERN',
			batch: 'October',
		},
		{
			name: 'Elent',
			age: '24',
			course: 'MERN',
			batch: 'November',
		},
		{
			name: 'Anusha',
			age: '22',
			course: 'MERN',
			batch: 'March',
		},
	]);
	return (
		<div>
			<h1>Students Details</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Course</th>
						<th>Batch</th>
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
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Students;
