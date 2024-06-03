const Messages = require("../models/messageModel");

//ch
//Checking the crypto module
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);


//Encrypting text
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypting text
function decrypt(text) {
   let iv = Buffer.from(text.iv, 'hex');
   let encryptedText = Buffer.from(text.encryptedData, 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}
//ch

module.exports.getMessages = async (req, res, next) => {
  //console.log("getMessages calledfffff");
  try {
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      let decMessage = decrypt({
        iv: msg.message.iv,
        encryptedData: msg.message.text});
      return {
        fromSelf: msg.sender.toString() === from,
        message: decMessage,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    //console.log(ex);
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    let encMessage = encrypt(message);
    // console.log(encMessage);
    // let decMessage = decrypt(encMessage);
    // console.log(decMessage);
    const data = await Messages.create({
      message: { text: encMessage.encryptedData,
      iv: encMessage.iv},
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
