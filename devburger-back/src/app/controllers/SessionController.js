import jwt from "jsonwebtoken";
import * as Yup from "yup";
import authConfig from "../../config/auth";
import User from "../models/User";

class SessionController {
	async store(request, response) {
		const schema = Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().min(6).required(),
		});

		const isValid = await schema.isValid(request.body);

		const emailOrPasswordIncorrect = () =>
			response.status(401).json({ error: "Email ou Senha incorreto" });

		if (!isValid) {
			emailOrPasswordIncorrect();
		}

		const { email, password } = request.body;
		const user = await User.findOne({ where: { email } });

		if (!user) {
			emailOrPasswordIncorrect();
		}

		const isSamePassword = await user.checkPassword(password);

		if (!isSamePassword) {
			emailOrPasswordIncorrect();
		}

		return response.json({
			id: user.id,
			name: user.name,
			email,
			admin: user.admin,
			token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
				expiresIn: authConfig.expiresIn,
			}),
		});
	}
}

export default new SessionController();
