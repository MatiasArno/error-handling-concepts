import { Request, Response } from 'express';
import Model from '../models/main-model';
import validateUser from '../schemas/user';
import AppError from '../utils/app-error';

abstract class MainController {
	static async getInfo(_req: Request, res: Response) {
		const data = await Model.getInfo();
		if (!data)
			throw new AppError('Wrong info', 'Requested data not found', 404);

		return res
			.status(200)
			.json({ message: 'This info is for testing purposes' });
	}

	static async login(req: Request, res: Response) {
		const { username } = req.body;
		const validatedUser = validateUser({ username }) as any;

		if (validatedUser.error) {
			const errorMessages = JSON.parse(validatedUser.error).map(
				(err: any) => err.message
			).join(' - ');

			throw new AppError('Validation error', errorMessages, 400);
		}

		res.json(validatedUser);
	}
}

export default MainController;
