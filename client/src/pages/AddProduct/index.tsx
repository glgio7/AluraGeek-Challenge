import * as S from "./styles";
import categories from "../../db.json";
import Button from "../../components/Button";

const availableCategories = Object.keys(categories);

const AddProduct = () => {
	return (
		<S.AddContainer>
			<form>
				<h4>Adicionar novo produto</h4>
				<label htmlFor="url">URL da imagem</label>
				<input
					id="url"
					type={"text"}
					required
					placeholder="https://i.imgur.com/removed.png"
				/>
				<select>
					<option value={"categoria"}>Categoria</option>
					{availableCategories &&
						availableCategories.map((item, index) => {
							return (
								<option value={item} key={index}>
									{item}
								</option>
							);
						})}
				</select>
				<label htmlFor="nome">Nome do produto</label>
				<input id="nome" type={"text"} required placeholder="Controle PS5" />
				<label htmlFor="preco">Preço do produto</label>
				<input id="preco" type={"text"} required placeholder="R$200" />
				<Button buttonText="Adicionar produto" className="add-button" />
			</form>
		</S.AddContainer>
	);
};

export default AddProduct;
