import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/app-error';

function errorHandlder(
	error: any,
	_req: Request,
	res: Response,
	_next: NextFunction
) {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({ message: error.message });
	}

	return res.status(500).json({ message: 'Something went wrong' });
}

export default errorHandlder;
