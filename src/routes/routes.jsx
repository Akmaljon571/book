import { Route, Routes } from 'react-router-dom'
import { ErrorPage, HomePage, SignInPage, SignUpPage } from '../page'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    )
}

export default Routers