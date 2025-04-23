import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export { hashPassword, comparePassword };