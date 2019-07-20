const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  title: String,
  allDay: Boolean,
  start: Date,
  end: Date,
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
