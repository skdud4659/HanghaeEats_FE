export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;
  
    return _reg.test(email);
  };

//비밀번호 영문/숫자 포함(8_20자)
export const passwordCheck = (password) => {
    let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    return _reg2.test(password);
}