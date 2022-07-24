export const sendMessage = (data) => {
    return {
        type: "SENDMESSAGE",
        payload: {
             id: new Date().getTime().toString(),
             data: data
        }
    }
}
export const getMessage = () => {
    return {
        type: "GETMESSAGE"
    }
}