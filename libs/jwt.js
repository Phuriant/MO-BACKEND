var jwt = require('jsonwebtoken');
var secretkey = "MySecretKey";

module.exports = {

  sign(payload) {
    let token = jwt.sign(payload, secretkey, {
      expiresIn: '1d'
    });
    return token;
  }, 

  verify(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        } 
      });
    });
  }
}; 