const MessageSchema = new mongoose.Schema({
  room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room', required:true},
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
  content: {type:String},
  attachments: [{ filename: String, url: String }],
  edited: {type:Boolean, default:false}
}, {timestamps:true});
