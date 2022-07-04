import bcrypt from 'bcrypt'

export const hashPassword = (plainPassword)=>{
    return bcrypt.hashSync(plainPassword, 10)
}


export const comparePassword= (plainPassword, hashPassword ) =>{
    return bcrypt.compareSync(plainPassword,hashPassword )
}



