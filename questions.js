// questions.js

// Each subject has an array of questions
// q = question text
// o = array of options
// a = index of correct answer (0-based)
const questions = {
  BIO101: [
    {q:"What is the study of life?", o:["Biology","Physics","Chemistry","Math"], a:0},
    {q:"Cell is the ___ of life?", o:["Organ","Unit","Tissue","Blood"], a:1},
    {q:"Plants make food by?", o:["Respiration","Photosynthesis","Breathing","Eating"], a:1},
    // Add more questions here
  ],

  CHM101: [
    {q:"H2O is called?", o:["Salt","Hydrogen","Water","Oxygen"], a:2},
    {q:"NaCl is?", o:["Sugar","Salt","Water","Acid"], a:1},
    {q:"pH above 7 is?", o:["Acidic","Neutral","Basic","Salt"], a:2},
    // Add more questions here
  ],

  PHY101: [
    {q:"Force = ?", o:["Mass x Acceleration","Mass + Acceleration","Mass / Acceleration","Mass - Acceleration"], a:0},
    {q:"Unit of energy?", o:["Joule","Newton","Watt","Volt"], a:0},
    // Add more questions here
  ],

  MTH101: [
    {q:"Derivative of x^2?", o:["2x","x","x^2","1"], a:0},
    {q:"Integral of 2x?", o:["x^2 + C","2x + C","x + C","1"], a:0},
  ],

  // Add all other subjects (MTH105, COS101, GST111, STS101, PCP101, ANP101, PHY105) here
};