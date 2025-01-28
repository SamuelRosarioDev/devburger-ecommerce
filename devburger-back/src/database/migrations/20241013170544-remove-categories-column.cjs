/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn("products", "category");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.addColumn("products", "category", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},
};
