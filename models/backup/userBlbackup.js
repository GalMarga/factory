const User = require('./userSchema');

const getAll = () => {
    return User.find({})
        .then(data => data)
        .catch(err => {
            throw err;
        });
};

const getById = (id) => {
    return User.findById(id)
        .then(data => data)
        .catch(err => {
            throw err;
        });
};

const postUser = (user) => {
    const newUser = new User({
        name: user.name,
        phone: user.phone,
        care: user.care
    });

    return newUser.save()
        .then(savedUser => savedUser)
        .catch(err => {
            throw err;
        });
};

const putUser = (id, userToUpdate) => {
    return User.findByIdAndUpdate(id, userToUpdate)
        .then(updatedUser => updatedUser)
        .catch(err => {
            throw err;
        });
};

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)
        .then(() => "User deleted!")
        .catch(err => {
            throw err;
        });
};

module.exports = {
    getAll,
    getById,
    postUser,
    putUser,
    deleteUser
};
