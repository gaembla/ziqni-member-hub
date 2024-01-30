import Cookies from "js-cookie";

export const expiresIn = 36000;

const makeTokenKey = (memberRefId) => {
    return `token-${memberRefId}`;
}

export const storeToken = (memberRefId, token) => {
    Cookies.set(makeTokenKey(memberRefId), token, {expires: expiresIn, secure: true});
}

export const getTokenByMemberRefId = (memberRefId) => {
    return Cookies.get(makeTokenKey(memberRefId));
}

export const removeTokenByMemberRefId = (memberRefId) => {
    Cookies.remove(makeTokenKey(memberRefId));
}
