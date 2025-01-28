import { extname, resolve } from "node:path";
import multer from "multer";
import { v4 } from "uuid";

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, "..", "..", "uploads"),
		filename: (request, file, callback) =>
			callback(null, v4() + extname(file.originalname)),
	}),
};
