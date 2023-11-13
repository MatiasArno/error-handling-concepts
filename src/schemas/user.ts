import { z } from 'zod';

const User = z.object({
	username: z.string(),
});

function validateUser(data: any) {
    return User.safeParse(data);
}

export default validateUser;