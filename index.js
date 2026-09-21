import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';
import fs from 'fs';
import path from 'path'; 
import nodemailer from 'nodemailer';
import { fileURLToPath } from "url";


// Fix Windows Node.js DNS resolution issue for mongodb+srv://
dns.setDefaultResultOrder('ipv4first');
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (err) {
  console.log('DNS setServers notice:', err.message);
}

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URIs
const SRV_URI = process.env.MONGODB_URI || 'mongodb+srv://alishabatham2_db_user:urq6lBf4WlNfk1Um@cluster0.upabs4c.mongodb.net/ugskillname?retryWrites=true&w=majority';
const DIRECT_URI = 'mongodb://alishabatham2_db_user:urq6lBf4WlNfk1Um@ac-wioukjg-shard-00-00.upabs4c.mongodb.net:27017,ac-wioukjg-shard-00-01.upabs4c.mongodb.net:27017,ac-wioukjg-shard-00-02.upabs4c.mongodb.net:27017/ugskillname?ssl=true&replicaSet=atlas-wioukjg-shard-0&authSource=admin&retryWrites=true&w=majority';
const COLLECTION_NAME = process.env.COLLECTION_NAME || 'ugskillname';

// Nodemailer Email Configuration
const EMAIL_SENDER = process.env.EMAIL_SENDER || 'alisha.522373@gmail.com';
const EMAIL_PASS = (process.env.EMAIL_PASS || 'pncmgfcuairxmdga').replace(/\s+/g, '');
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || 'hr@nexisparkx.com';

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_SENDER,
    pass: EMAIL_PASS,
  },
});

// Test Nodemailer Transporter connection on startup
mailTransporter.verify((error, success) => {
  if (error) {
    console.error('❌ Nodemailer SMTP Connection Error:', error.message);
  } else {
    console.log(`📧 Nodemailer SMTP Transporter ready! (Sender: ${EMAIL_SENDER} -> Recipient: ${EMAIL_RECIPIENT})`);
  }
});

// Helper function to send email notification
async function sendFormResponseEmail(payload) {
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #4f46e5; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">🎓 New Form Submission Received</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;">UGSkill Website Digital Passport Registration</p>
        </div>
        <div style="padding: 24px; color: #334155; font-size: 14px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; width: 40%; color: #64748b;">Full Name:</td>
              <td style="padding: 10px 0; font-weight: bold; color: #0f172a;">${payload.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Role:</td>
              <td style="padding: 10px 0; text-transform: uppercase; font-weight: bold; color: #4f46e5;">${payload.role}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${payload.email}" style="color: #2563eb; text-decoration: none;">${payload.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">College / University:</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.collegeName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Department:</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.department}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Batch / Graduation Year:</td>
              <td style="padding: 10px 0; color: #0f172a;">${payload.batchYear}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Generated UG ID:</td>
              <td style="padding: 10px 0; font-family: monospace; font-size: 16px; font-weight: bold; color: #16a34a;">${payload.ugId || 'N/A'}</td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 20px;">
            This email was automatically sent from the UGSkill Website Backend system to <strong>${EMAIL_RECIPIENT}</strong>.
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"UGSkill Platform" <${EMAIL_SENDER}>`,
      to: EMAIL_RECIPIENT,
      replyTo: payload.email,
      subject: `🎓 New Form Submission: ${payload.fullName} (${payload.role.toUpperCase()})`,
      html: htmlContent,
    };

    const info = await mailTransporter.sendMail(mailOptions);
    console.log(`📧 Form response email successfully sent to ${EMAIL_RECIPIENT} [ID: ${info.messageId}]`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email notification:', error.message);
    return { success: false, error: error.message };
  }
}

// Local storage fallback file
const LOCAL_STORAGE_FILE = path.join(process.cwd(), 'server', 'form_responses_backup.json');

// Middleware
app.use(cors());
app.use(express.json());

let isMongoConnected = false;
let connectionErrorDetails = '';

// Connection function with retry and auto-sync
async function connectDatabase() {
  if (isMongoConnected) return;

  console.log('🔄 Connecting to MongoDB Atlas (DB: ugskillname, Collection: ugskillname)...');
  
  // Strategy 1: Try SRV URI
  try {
    await mongoose.connect(SRV_URI, { dbName: 'ugskillname', serverSelectionTimeoutMS: 5000 });
    isMongoConnected = true;
    console.log(`✅ [SRV] Successfully connected to MongoDB Atlas! DB: ugskillname | Collection: ${COLLECTION_NAME}`);
    await syncLocalBackupsToMongo();
    return;
  } catch (srvErr) {
    // Try strategy 2
  }

  // Strategy 2: Try Direct ReplicaSet URI
  try {
    await mongoose.connect(DIRECT_URI, { dbName: 'ugskillname', serverSelectionTimeoutMS: 5000 });
    isMongoConnected = true;
    console.log(`✅ [Direct] Successfully connected to MongoDB Atlas! DB: ugskillname | Collection: ${COLLECTION_NAME}`);
    await syncLocalBackupsToMongo();
    return;
  } catch (directErr) {
    connectionErrorDetails = directErr.message;
    console.error(`❌ MongoDB Atlas Connection Notice: ${directErr.message}`);
    console.error(`💡 Tip: Enable '0.0.0.0/0' in MongoDB Atlas Network Access (https://cloud.mongodb.com) to allow remote connections.`);
  }
}

async function syncLocalBackupsToMongo() {
  try {
    const localData = getLocalBackups();
    if (localData.length === 0) return;
    console.log(`🔄 Syncing ${localData.length} pending local responses to MongoDB collection '${COLLECTION_NAME}'...`);
    for (const item of localData) {
      const exists = await FormResponse.findOne({ email: item.email, ugId: item.ugId });
      if (!exists) {
        await new FormResponse(item).save();
      }
    }
    console.log(`✅ Successfully synced form responses to MongoDB collection '${COLLECTION_NAME}'!`);
  } catch (err) {
    console.error('Error syncing local backups to MongoDB:', err.message);
  }
}

connectDatabase();
setInterval(connectDatabase, 15000);

// Schema definition for Form Responses in collection 'ugskillname'
const formResponseSchema = new mongoose.Schema({
  role: { type: String, default: 'student' },
  fullName: { type: String, required: true },
  collegeName: { type: String, required: true },
  department: { type: String, default: 'Computer Science & Engineering' },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  batchYear: { type: String, default: '2022-2026' },
  ugId: { type: String, default: '' },
  formType: { type: String, default: 'registration' },
  submittedAt: { type: Date, default: Date.now },
  additionalData: { type: mongoose.Schema.Types.Mixed, default: {} }
}, {
  collection: COLLECTION_NAME,
  timestamps: true
});

const FormResponse = mongoose.model('FormResponse', formResponseSchema);

// Helper to save locally
function saveLocalBackup(data) {
  try {
    let existing = [];
    if (fs.existsSync(LOCAL_STORAGE_FILE)) {
      const content = fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8');
      existing = JSON.parse(content || '[]');
    }
    existing.push({ ...data, savedLocallyAt: new Date().toISOString() });
    fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(existing, null, 2));
    console.log(`💾 Saved response locally to ${LOCAL_STORAGE_FILE}`);
  } catch (e) {
    console.error('Failed to save local backup:', e.message);
  }
}

// Helper to read local backup
function getLocalBackups() {
  try {
    if (fs.existsSync(LOCAL_STORAGE_FILE)) {
      const content = fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8');
      return JSON.parse(content || '[]');
    }
  } catch (e) {
    console.error('Failed to read local backup:', e.message);
  }
  return [];
}

// API Health Endpoint
app.get('/api/health', (req, res) => {
  const stateNames = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const dbState = stateNames[mongoose.connection.readyState] || 'disconnected';
  res.json({
    status: 'online',
    isMongoConnected,
    dbState,
    collection: COLLECTION_NAME,
    connectionErrorDetails,
    timestamp: new Date()
  });
});

// API Endpoint to Submit Form Data
app.post('/api/forms', async (req, res) => {
  try {
    const { role, fullName, collegeName, department, email, phone, batchYear, ugId, formType, ...additional } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        error: 'fullName and email are required fields'
      });
    }

    const payload = {
      role: role || 'student',
      fullName,
      collegeName: collegeName || 'N/A',
      department: department || 'N/A',
      email,
      phone: phone || 'N/A',
      batchYear: batchYear || 'N/A',
      ugId: ugId || '',
      formType: formType || 'registration',
      additionalData: additional
    };

    // Save locally to prevent data loss
    saveLocalBackup(payload);

    // Trigger Email Delivery via Nodemailer
    const emailResult = await sendFormResponseEmail(payload);

    if (mongoose.connection.readyState === 1) {
      const newResponse = new FormResponse(payload);
      const saved = await newResponse.save();
      console.log(`📥 Form response saved to MongoDB collection '${COLLECTION_NAME}' [ID: ${saved._id}] for ${saved.email}`);

      return res.status(201).json({
        success: true,
        message: `Form response stored in MongoDB collection '${COLLECTION_NAME}' and email delivered to ${EMAIL_RECIPIENT}`,
        storage: 'mongodb',
        collection: COLLECTION_NAME,
        emailStatus: emailResult,
        data: saved
      });
    } else {
      console.log(`⚠️ Saved response locally and sent email for ${payload.email}`);
      return res.status(201).json({
        success: true,
        message: `Form response recorded & email sent to ${EMAIL_RECIPIENT}`,
        storage: 'local_backup',
        collection: COLLECTION_NAME,
        emailStatus: emailResult,
        data: payload
      });
    }
  } catch (error) {
    console.error('Error saving form response:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save form response',
      details: error.message
    });
  }
});

// Alias endpoint for /api/register
app.post('/api/register', async (req, res) => {
  req.url = '/api/forms';
  return app._router.handle(req, res);
});

// GET Endpoint to fetch stored form responses
app.get('/api/forms', async (req, res) => {
  try {
    let mongoDocs = [];
    if (mongoose.connection.readyState === 1) {
      mongoDocs = await FormResponse.find().sort({ createdAt: -1 });
    }
    const localDocs = getLocalBackups();

    res.json({
      success: true,
      mongoCount: mongoDocs.length,
      localCount: localDocs.length,
      collection: COLLECTION_NAME,
      isMongoConnected,
      data: mongoDocs.length > 0 ? mongoDocs : localDocs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch form responses',
      details: error.message
    });
  }
});

const frontendPath = path.join(__dirname, "dist");
app.use(express.static(frontendPath));
app.get("*splat", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
