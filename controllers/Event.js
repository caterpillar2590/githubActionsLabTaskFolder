const createEvent = (req, res) => {
  const { name, date, category } = req.body;

  if (!name || !date || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const eventDate = new Date(date);
  const now = new Date();
  if (eventDate < now) {
    return res.status(400).json({ error: 'Event date must be in the future' });
  }

  // Proceed to save event (mocked or real)
  return res.status(200).json({ message: 'Event created successfully' });
};

