const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    username: {type:String, required:true, unique:true, minlength:3, maxlength:25},
    password:{type:String, required:true,minlength:5},
    email:{type:String, trim:true, unique:true, required:true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address']},
    age:{type:Number, required:true},
    job:{type:String, required:true},
    description:{type:String, required:true}
},{
    timestamps:true
});

registerSchema.pre('save',function (next){
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
    
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
    
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

const saveMessageSchema = new Schema({
    username:{type:String,required:true},
    message:{type:String,required:true},
},{
    timestamps:true
});

const Register = mongoose.model('mern-register',registerSchema);
const Messages = mongoose.model('mern-messages',saveMessageSchema);

module.exports = {Register,Messages};