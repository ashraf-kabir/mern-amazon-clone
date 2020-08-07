import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://ashraf:60391881@mern-amazona.0tmdw.mongodb.net/amazona?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'Puiahsd3kgaQhrhio1UB',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: 'AKIAJJG3PB364N5AURXA',
  secretAccessKey: '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',
};
