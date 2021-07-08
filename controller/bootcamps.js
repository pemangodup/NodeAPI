// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps

const Bootcamps = require('../models/Bootcamps');

// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamps.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      error: `${err}`.red.bold,
    });
  }
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: `${err}`,
    });
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: `${err}`,
    });
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      data: `${err}`,
    });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: `${err}`,
    });
  }
};
