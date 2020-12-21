export const states = {
	users: [
		{
			id: 1,
			name: "John Doe",
			email: "johndoe@abc.com",
			photo: "http://lorempixel.com/400/400/people/1"
		}
	],
	currentToDos: [
			{
				id: 71,
				description: 'Design personal Calendar',
				dueDate: '2020-12-23',
				time: '12.00 am',
				status: 'done'
			},
			{
				id: 72,
				description: 'Take Volvo and go for a ride',
				dueDate: '2020-12-23',
				time: '12.30 am',
				status: 'undone'
			},
			{
				id: 73,
				description: 'Search for a job',
				dueDate: '2020-12-23',
				time: '10.30 am',
				status: 'Completed'
			},
			{
				id: 74,
				description: 'Go with the dog for a walk',
				dueDate: '2020-12-23',
				time: '11.00 pm',
				status: 'undone'
			}
			],
	todos: [],
	currentDate: new Date(),
	completed: 48,
	postponed: 12,
	undone: 6,
	loading: false,
	error: null
};
