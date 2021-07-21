const REDIRECT_URI =  "http://3.36.97.199/api/user/kakao/callback";
const CLIENT_ID = "89c020b3b307f237f8e3e3135ce353cf";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;