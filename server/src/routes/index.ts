import { Router } from "express";

const routes = Router();

routes.get("/products", (req, res) => {
	return res.status(200).json({ message: "Deu certo!" });
});

export default routes;
