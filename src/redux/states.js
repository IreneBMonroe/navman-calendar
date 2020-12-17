export const initialState = {
	users: [
		{
			id: 1,
			name: "John Doe",
			email: "johndoe@abc.com",
			photo: "http://lorempixel.com/400/400/people/1"
		}
	],
	todos: [
		{
			id: 1,
			description: 'Design personal Calendar',
			dueDate: new Date(),
			status: 'done'
		},
		{
			id: 2,
			description: 'Take Volvo and go for a ride',
			dueDate: new Date(),
			status: 'undone'
		},
		{
			id: 3,
			description: 'Search for a job',
			dueDate: new Date(),
			status: 'Completed'
		},
		{
			id: 4,
			description: 'Go with the dog for a walk',
			dueDate: new Date(),
			status: 'undone'
		}
	],
	currentDate: new Date(),
	completed: 48,
	postponed: 12,
	undone: 6
};
