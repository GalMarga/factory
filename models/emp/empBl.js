const Emp = require('./empSchema');
const User = require('../user/userSchema');


const getAll =  async () => {
    const employees = await Emp.find({})
    return employees;
};

const getById = async (id) => {
    try {

      const employee = await Emp.findById(id);
      return employee;

    } catch (error) {
      console.error(error);
     
    }
  };

  //bl
  const getByName = async (name) => {
    try {
      const employeeName = await Emp.find({ firstName: { $regex: name, $options: 'i' } });
      return employeeName;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching employees by name');
    }
  };

const addEmp = async (obj) => {
try {

  const { firstName, lastName, _id } = obj;
  const fullName = `${firstName} ${lastName}`;

  const newEmp = new Emp(obj);
  await newEmp.save();

  const newUser = new User({ userName: obj.userName, pass: obj.pass, fullName, idEmp: newEmp._id });
  await newUser.save();


} catch (error) {
    return "not", error;
    
}
  };

const updateEmp = async (id, obj) => {

    await Emp.findByIdAndUpdate(id, obj)

    return 'Updated'
  
};

const deleteEmp = async (id) => {
    await Emp.findByIdAndDelete(id)

    return 'Deleted';
};

module.exports = {
    getAll,
    getById,
    addEmp,
    updateEmp,
    deleteEmp,
    getByName
};