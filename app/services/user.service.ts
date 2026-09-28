import { userRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { LoginUserSchemas } from "../schemas/user.schema";


export class UserService {
  async register(data: {
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    imagem: string;
  }) {
    const existingUser = await userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("E-mail já cadastrado");
    }

    const passwordEncrypted = await bcrypt.hash(data.senha, 10);

    const user = await userRepository.create({
      nome: data.nome,
      email: data.email,
      senha: passwordEncrypted,
      imagem: data.imagem
    });

    return user;
  }

  async login(data: LoginUserSchemas) {
    const user = await userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("Email ou senha Invalidos");
    }

    const correctPassword = await bcrypt.compare(data.senha, user.senha);

    if (!correctPassword) {
      throw new Error("Email ou senha Invalidos");
    }

    return user;
  }

  async findByEmail(email: string) {
    return userRepository.findByEmail(email);
  }

  async findById(id: number) {
    return userRepository.findById(id);
  }
}

export const userService = new UserService();
