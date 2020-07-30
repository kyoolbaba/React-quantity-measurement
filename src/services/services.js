import axios from 'axios';

export default{
    // getData:(unitin, quantity , unitout)=> axios({
    //     'method':'GET',
    //     'url':`{api/quantitymeasurement/convert/${unitin}/${quantity}/${unitout}}`,
    //     'baseURL':'http://localhost:8080/',
    //     'header': {
    //         'content-type':"application/json"
    //     }
    // })

    getData:(baseUrl,unitin, quantity , unitout)=>axios.get(`${baseUrl}${unitin}/${quantity}/${unitout}` )
}