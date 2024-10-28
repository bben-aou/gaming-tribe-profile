import jtw from 'jsonwebtoken'

export const generateRefreshToken = (userId : string) : string => {
    return jtw.sign({id : userId}, process.env.JWT_REFRESH_SECRET!, {expiresIn : '7d'})
}