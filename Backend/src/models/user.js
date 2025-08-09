const UserSchema = new mongoose.Schema({
  name: {type: String, required:true},
  email: {type: String, required:true, unique:true},
  passwordHash: {type:String, required:true},
  role: {type: String, enum:['admin','editor','viewer'], default:'viewer'},
  avatarUrl: String,
  status: {type:String, enum:['online','offline'], default:'offline'},
  lastSeen: Date
}, {timestamps:true});
