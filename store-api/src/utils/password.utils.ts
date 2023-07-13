import { compare, hash } from 'bcrypt';

export const generateHash = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};
