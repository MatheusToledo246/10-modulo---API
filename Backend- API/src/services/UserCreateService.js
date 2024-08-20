const { hash, compare } = require("bcrypt");
const AppError = require("../utils/AppError");

class UserCreateService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({ name, email, password}){
        const checkUserExist = await this.userRepository.findByEmail(email);
       
        if(checkUserExist){
            throw new AppError("Este e-mail já esta em uso.");
        }

        const hashedPassword = await hash(password, 8);

        await this.userRepository.create({ name, email, password:hashedPassword});
    }
}

module.exports = UserCreateService;