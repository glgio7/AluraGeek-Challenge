import { Router } from "express";

const routes = Router();

routes.get("/list/products", (req, res) => {
	return res.status(200).json({ message: "Produtos aparecerão aqui" });
});

export default routes;
