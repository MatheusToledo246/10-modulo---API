import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUP } from '../pages/SignUP';


export function AuthRoutes() {
    const user = localStorage.getItem("@rocketnotes:user");

    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUP />} />

            { !user && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
    )
}
