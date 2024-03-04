const Users = require('./userSchema');    

const getAll =  async () => {
    const users = await Users.find({})
    return users;
};

const getById = async (id) => {
    try {

      const user = await Users.findById(id);
      return user;

    } catch (error) {
      console.error(error);
     
    }
  };

const AddUser = async (obj) => {
try {
    
    const newUser = new Users(obj);
    await newUser.save()

} catch (error) {
    return "created";
    
}
  };

const updateUser = async (id, obj) => {

    await Users.findByIdAndUpdate(id, obj)

    return 'Updated'
  
};

const deleteUser = async (id) => {
    await Users.findByIdAndDelete(id)

    return 'Deleted';
};

module.exports = {
    getAll,
    getById,
    AddUser,
    updateUser,
    deleteUser
};