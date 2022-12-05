const bcrypt = require ('bcrypt');

function useCrypt(password){
    const salt = bcrypt.genSaltSync(10);
    const pass =  bcrypt.hashSync(password, salt);
    return pass
}
// export default useCrypt;
module.exports = useCrypt