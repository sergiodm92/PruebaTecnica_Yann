import axios from "axios";
import urlExist from "url-exist"




export function shortLink(Link){

    return async function (dispatch){
        try{
            let Linkend = Link
            if(Link.includes("http")==false)Linkend="http://"+Link
            let jsonlink = {"direction":Linkend}
            const json = await axios.post(`https://ptyann.herokuapp.com/`, jsonlink);

                return dispatch({
                type: "LINK",
                payload: json.data.data})
            }
        catch(err){
            return dispatch({
            type: "LOGIN_STATUS",
            payload: "error"})
        }
        
    }
  }

// export function validateLink(Link){

//     return async function (dispatch){
//         try{
//             console.log(`${Link}`)
//             const response = await urlExist("https://google.com")
//             console.log(response)
//             return dispatch({
//                 type: "URL_STATUS",
//                 payload: response})
//             }
//         catch(err){
//        console.log("error")
//         }
        
//     }
// }


// export function postLogin(jsonUser){
//     return async function (dispatch){
//         try{
//             const json = await axios.post(`/user/login`, jsonUser);
//             if(json.data.status==="ok")localStorage.setItem("AuthLogin",json.data.data)   
//             return dispatch({
//               type: "LOGIN_STATUS",
//               payload: json.data.status})
//           }
//         catch(err){
//           return dispatch({
//             type: "LOGIN_STATUS",
//             payload: "error"})
//         }
        
//     }
//   }



// fetch(myRequest).then(function(response) {
//     console.log(response.status); // returns 200
//     response.blob().then(function(myBlob) {
//       var objectURL = URL.createObjectURL(myBlob);
//       myImage.src = objectURL;
//     });
//   });