import bcrypt from "bcrypt";
import Sequelize, { Model } from "sequelize";

class User extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING,
				admin: Sequelize.BOOLEAN,
			},
			{
				sequelize,
			},
		);

		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		this.addHook("beforeSave", async (user) => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(user.password, 10);
			}
		});

		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		return this;
	}

	async checkPassword(password){
		return bcrypt.compare(password, this.password_hash)
	}
}

export default User;
