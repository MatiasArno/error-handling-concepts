import { Request, Response } from 'express';

abstract class MainController {
	static async getInfo(req: Request, res: Response) {
		return res
			.status(200)
			.json({ message: 'This info is for testing purposes' });
	}

    static async create(req: Request, res: Response) {
        return res
			.status(201)
			.json({ message: 'Mock item created' });
    }
}

export default MainController;
