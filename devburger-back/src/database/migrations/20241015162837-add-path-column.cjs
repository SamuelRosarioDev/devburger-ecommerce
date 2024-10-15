/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("categories", "path", {
			type: Sequelize.STRING,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("categories", "path");
	},
};
