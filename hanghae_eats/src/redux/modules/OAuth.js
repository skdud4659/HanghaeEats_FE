//카카오톡 로그인(보안)
const REDIRECT_URI =  "http://3.36.97.199/api/user/kakao/callback";
const CLIENT_ID = "89c020b3b307f237f8e3e3135ce353cf";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//구글 로그인(보안)
const G_REDIRECT_URI = "http://nameisgarden.xyz/api/user/google/callback"
const G_CLIENT_ID = "498392378371-j0sjs2lf9siqjk543e3m4klvjshhe7b6.apps.googleusercontent.com"
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${G_REDIRECT_URI}&scope=email%20profile&client_id=${G_CLIENT_ID}&flowName=GeneralOAuthFlow`