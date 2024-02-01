//depBl.js
const Dep = require('./departmentSchema');

const getAll = async () => {
    const departments = await Dep.find({})
    return departments
};

const getById = async (id) => {
    try {
        const department = await Dep.findById(id);
        return department;
  
      } catch (error) {
        console.error(error);
       
      }
};

const addDep = async (obj) => {
    try{

        const newDep = new Dep(obj);
        await newDep.save();

    }catch (erroe) {
        return "Created new Dep"

    }
};

//Put
const updateDep = async (id, obj) => {

    await Dep.findByIdAndUpdate(id, obj)

    return 'Updated'
  
};

const deleteDep = async (id, obj) => {

    await Dep.findByIdAndDelete(id, obj)

    return 'Updated'
  
};


module.exports = {
    getAll,
    getById,
    addDep,
    updateDep,
    deleteDep
};

