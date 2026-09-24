const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 42, right: 42 }
});

const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Styling constants
const PRIMARY = '#0A0A0A';
const SECONDARY = '#555555';
const ACCENT = '#996B1E';
const RULE = '#D5D5D0';

// Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(PRIMARY).text('GUNTUKA MEGHANA REDDY', { letterSpacing: 0.5 });
doc.font('Helvetica').fontSize(10.5).fillColor(ACCENT).text('AI / ML ENGINEER IN THE MAKING  •  SOFTWARE DEVELOPER', { letterSpacing: 1 });
doc.moveDown(0.3);

doc.font('Helvetica').fontSize(9).fillColor(SECONDARY).text(
  'Email: guntukameghanareddy7@gmail.com  |  Phone: +91 62810 38551  |  Location: Hyderabad, India  |  GitHub & LinkedIn: Available Online'
);
doc.moveDown(0.5);

function drawDivider(title) {
  doc.moveDown(0.4);
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(title.toUpperCase(), { letterSpacing: 1 });
  doc.strokeColor(RULE).lineWidth(0.75).moveTo(42, doc.y + 2).lineTo(553, doc.y + 2).stroke();
  doc.moveDown(0.4);
}

// Summary
drawDivider('Professional Summary');
doc.font('Helvetica').fontSize(9.5).fillColor(PRIMARY).lineGap(2).text(
  'Enthusiastic and analytically driven B.Tech CSE (AI & ML) student with robust foundations in software engineering, machine learning pipelines, and predictive data modeling. Experienced in building multimodal NLP tools, clinical AI algorithms, and cybersecurity classifiers. Passionate about engineering high-reliability software and intelligent systems for high-impact teams.'
);

// Education
drawDivider('Education');

function addEdu(degree, institution, score, period) {
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(degree, { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(SECONDARY).text(`  —  ${institution}`, { continued: true });
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text(`  |  ${score}`, { align: 'right' });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(SECONDARY).text(period);
  doc.moveDown(0.3);
}

addEdu('B.Tech in Computer Science & Engineering (AI & ML)', 'DRK Institute of Science and Technology (JNTUH)', 'CGPA: 7.2', 'Expected 2027');
addEdu('Senior Secondary / Intermediate (MPC)', 'Sri Chaitanya Junior College', 'Score: 85%', '2021 – 2023');
addEdu('ICSE (Class X)', 'Sherwood Public School', 'Score: 84%', '2011 – 2021');

// Technical Skills
drawDivider('Technical Skills');
function addSkillRow(category, list) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text(`${category}: `, { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(SECONDARY).text(list);
  doc.moveDown(0.2);
}
addSkillRow('Languages', 'Python, Java, SQL, C (Fundamentals)');
addSkillRow('Data Analysis & BI', 'Pandas, NumPy, Microsoft Excel, Power BI, Tableau');
addSkillRow('Machine Learning & AI', 'Scikit-learn, TensorFlow, PyTorch, NLP, Computer Vision, Speech-to-Text, OCR');
addSkillRow('Developer Tools & Systems', 'Git, GitHub, VS Code, Jupyter Notebooks, Linux Environments, Vercel');

// Projects
drawDivider('Featured Projects');

function addProject(title, stack, bullets) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(title, { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(ACCENT).text(`   [${stack}]`);
  doc.moveDown(0.2);
  bullets.forEach(b => {
    doc.font('Helvetica').fontSize(9).fillColor(SECONDARY).text(`•  ${b}`, { indent: 10, lineGap: 1.5 });
  });
  doc.moveDown(0.3);
}

addProject('AI Multimodal Summarisation System', 'Python, NLP, OCR, Speech-to-Text, Streamlit', [
  'Engineered an end-to-end multimodal pipeline summarizing heterogeneous content including raw text, PDF documents, image scans, and video lectures.',
  'Integrated Tesseract OCR for text extraction from raster diagrams and Whisper-based speech-to-text transcription for audio/video assets.',
  'Implemented extractive and abstractive NLP summarization reducing document ingestion time by over 60% for academic research workflows.'
]);

addProject('AI MedTech Diagnostics & Prediction', 'Python, Scikit-learn, Pandas, Healthcare AI', [
  'Designed a predictive diagnostic machine learning model for healthcare risk classification and vital signal analysis.',
  'Preprocessed complex biomedical datasets with imputation, outlier mitigation, and feature standardization.',
  'Benchmarked logistic classification, random forests, and gradient boosting to optimize clinical recall and mitigate false negatives.'
]);

addProject('Phishing URL Detection Pipeline', 'Python, Scikit-learn, Feature Engineering, Cybersecurity', [
  'Constructed a cybersecurity classification engine identifying deceptive phishing links via lexical and structural URL attributes.',
  'Engineered 18+ heuristic features including domain token length, entropy, hyphen frequency, IP presence, and suspicious subdomains.',
  'Trained an optimized ensemble classifier achieving high precision detection to protect users from malicious redirection attacks.'
]);

// Achievements & Certifications
drawDivider('Honors & Certifications');
function addAchievement(year, title, issuer) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text(`${year}  •  ${title}`, { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(SECONDARY).text(` (${issuer})`);
  doc.moveDown(0.2);
}
addAchievement('2026', 'Hackathon Winner', 'Collegiate Tech Innovation Summit');
addAchievement('2023', 'Hackathon Finalist & Participant', 'JNTUH Innovation Hack');
addAchievement('2026', 'Oracle Certified: Agentic AI Foundations', 'Oracle');
addAchievement('2026', 'SQL Masterclass Certification', 'Simplilearn');

doc.end();

stream.on('finish', () => {
  console.log('Resume PDF generated successfully at:', outputPath);
});
