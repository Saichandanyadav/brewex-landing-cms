const Heading = require('../models/Heading');

const getHeading = async (req, res) => {
  const heading = await Heading.findOne();
  if (!heading) return res.status(404).json({ message: 'No heading found' });
  res.json(heading);
};

const setHeading = async (req, res) => {
  const { text } = req.body;
  const io = req.app.get('io');
  let heading = await Heading.findOne();
  if (heading) {
    heading.text = text;
    await heading.save();
  } else {
    heading = new Heading({ text });
    await heading.save();
  }

  io.emit('headingUpdated', heading.text);
  res.json(heading);
};

module.exports = { getHeading, setHeading };
