// The role of this class is to return undefined values in order to test error handling

abstract class MainModel {
	static async getInfo() {
		return undefined;
	}

	static async create(data: any) {
		return undefined;
	}
}

export default MainModel;
