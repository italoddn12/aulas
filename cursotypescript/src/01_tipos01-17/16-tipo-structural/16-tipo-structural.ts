type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };
const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = { userName: 'italo', password: '123456' };
const sentUser = { userName: 'italo', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
