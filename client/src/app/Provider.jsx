import { StyledEngineProvider } from "@mui/material"
import {NextUIProvider} from "@nextui-org/react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({children}) => {
  return (
    <StyledEngineProvider injectFirst>
        <NextUIProvider>
            {children}
            <ToastContainer />
        </NextUIProvider>
    </StyledEngineProvider>
  )
}

export default Provider;