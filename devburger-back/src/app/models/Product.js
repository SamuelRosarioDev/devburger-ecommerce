import Sequelize, { Model } from "sequelize";

class Product extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				path: Sequelize.STRING,
				offer: Sequelize.BOOLEAN,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/product-file/${this.path}`;
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

	static associate(models) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		this.belongsTo(models.Category, {
			foreignKey: "category_id",
			as: "category",
		});
	}
}

export default Product;
