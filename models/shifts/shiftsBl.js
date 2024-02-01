const Shifts = require('./shiftsSchema');

const getAll = async () => {
    const shiftsAll = await Shifts.find({})
    return shiftsAll;
};

const getById = async (id) => {
    try {

        const shift = await Shifts.findById(id);
        return shift;
  
      } catch (error) {
        console.error(error);
       
      }
};

const addShift = async (obj) => {
    try {
    
        const newShift = new Shifts(obj);
        await newShift.save()
    
    } catch (error) {
        return "created";
    
    }
      };
      

module.exports = {
    getAll,
    getById,
    addShift,
};