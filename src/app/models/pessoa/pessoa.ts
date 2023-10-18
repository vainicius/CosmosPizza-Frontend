import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Endereco } from "../endereco/endereco"
import { TipoPessoa } from "../enums/tipo-pessoa/tipo-pessoa";

export class Pessoa extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    endereco!: Endereco;
    tipoPessoa!: TipoPessoa
}
