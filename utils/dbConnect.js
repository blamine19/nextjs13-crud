const mongoose = require('mongoose');

export default  async function dbConnect() {
    try {
      await mongoose.connect('mongodb+srv://amineblh:KT1PLZGh1lowoJAZ@cluster0.btndrdy.mongodb.net/nextcrud' ,
      {useUnifiedTopology:true , useNewUrlParser:true, /*tls: false,
    tlsAllowInvalidCertificates: true*/});

      console.log('Connected successfully !')

    } catch (error) {
        console.log(error)
    }
}

 