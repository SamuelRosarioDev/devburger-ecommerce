module.exports = {
	dialect: 'postgres',
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	username: process.env.PG_USERNAME,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	define: {
	  timespamps: true,
	  underscored: true,
	  underscoredAll: true,
	},
  };