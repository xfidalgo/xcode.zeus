import React from 'react';

// import { createTheme } from '@mui/material/styles';
import Image from "next/image";
// import { Image } from 'theme-ui';
// import { makeStyles } from '@mui/styles';

import logo from '../../assets/logo.png';

//  const th = createTheme((theme) => ({
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   logo: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
//    center: {
//      display: 'block',
//      marginLeft: 'auto',
//      marginRight: 'auto',
//    }
// }))

export default function Welcome() {

    return (
      <div sx={{
        width: 'auto',
        marginLeft: 2,
        marginRight: 2,
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
      }}>
        <div sx={{
            marginTop: 3,
            marginBottom: 3,
            padding: 2,

              marginTop: 6,
              marginBottom: 6,
              padding: 3,
        }}>
          <Image src={logo} alt="Reclutamiento de Mortales" height="auto" width="auto"
            sx={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',

          }}/>
        </div>
      </div>
    )
}
