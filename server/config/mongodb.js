import dns from 'dns';
dns.setServers(['1.1.1.1', '1.0.0.1']); // Cloudflare (solo para este proceso)
dns.setDefaultResultOrder('ipv4first');


import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.log('❌ MongoDB error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
