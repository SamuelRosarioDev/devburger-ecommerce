import Sequelize, { Model } from "sequelize";

class Category extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/category-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		return this;
	}
}

export default Category;
