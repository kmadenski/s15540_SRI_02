const express = require('express');
const router = express.Router();

const Student = require('../models/Student');

router.get('/', (req, res) => {
  Student.find()
    .then(students => {
      return res.json(students);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});
router.get('/:id', (req, res) => {
  Student.findById(
      req.params.id,
  )
      .then(student => {
        return res.json(student);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
});
router.post('/', (req, res) => {
  const { name, age } = req.body;

  const newStudent = new Student({
    name,
    age
  });

  newStudent
    .save()
    .then(student => res.json(student))
    .catch(error => res.status(500).json(error));
});

router.put('/:id', (req, res) => {
  const { name, age } = req.body;
  Student.findOneAndUpdate(
    { _id: { $eq: req.params.id } },
    { name, age },
    { new: true }
  )
    .then(newStudent => {
      return res.json(newStudent);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  Student.findOneAndDelete(
      { _id: { $eq: req.params.id } },
      )
    .then(student => {
      if (!student) {
        res.status(404).json({ msg: 'There is no student for this ID' });
      }

      return res.json(student);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

module.exports = router;
