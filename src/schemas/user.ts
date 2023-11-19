import { z } from 'zod';

const User = z.object({
	username: z.string(),
	password: z.number(),
});

function validateUser(data: any) {
	return User.safeParse(data);
}

export default validateUser;
