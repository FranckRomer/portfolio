var moment = require('moment');
import axios from 'axios'

////////////////////////////////////////////////////////////////
export default async function GetHora(req: any, res: any) {

    // var hoy = moment().utcOffset("-6:00");
    const hoy = await moment().format('hh:mm:ss');
    const amp = await moment().format('a');
    // console.log(hoy);
    // setTimeout(() => {
    // }, 1000);
    res.status(200).json({
        hora: hoy,
        amp: amp,
        clima : ""
    })
}