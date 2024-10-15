/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("products", "offer", {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("products", "offer");
	},
};
