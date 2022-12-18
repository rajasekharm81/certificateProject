import {Component} from 'react'
import { Backdrop,CircularProgress } from '@mui/material'

class LoadingView extends Component{
    render(){
        const{isLoading}=this.props
        return(
            <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        )
    }
}

export default LoadingView
