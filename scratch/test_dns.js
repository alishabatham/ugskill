import mongoose from 'mongoose';

const directUri = 'mongodb://alishabatham2_db_user:urq6lBf4WlNfk1Um@ac-wioukjg-shard-00-00.upabs4c.mongodb.net:27017,ac-wioukjg-shard-00-01.upabs4c.mongodb.net:27017,ac-wioukjg-shard-00-02.upabs4c.mongodb.net:27017/ugskillname?ssl=true&replicaSet=atlas-wioukjg-shard-0&authSource=admin&retryWrites=true&w=majority';

console.log('Attempting direct connection to MongoDB Atlas...');
mongoose.connect(directUri, {
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log('✅ SUCCESS! CONNECTED TO MONGODB ATLAS!');
  process.exit(0);
})
.catch((err) => {
  console.error('❌ Mongoose connect error:', err.message);
  process.exit(1);
});
