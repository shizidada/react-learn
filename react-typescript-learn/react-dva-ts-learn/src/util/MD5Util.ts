import crypto from 'crypto';

export const MD5 = (str: string) => {
  const md5 = crypto.createHash('md5');
  md5.update(str);
  const cstr = md5.digest('hex');
  return cstr;
};
