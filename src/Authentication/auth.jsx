import { useState } from 'react'

export const Authentication = () => {
    
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);    
    const [id, setID] = useState(null);

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        return user;
    }

    const getEmail = () => {
        const emailString = sessionStorage.getItem('email');
        const email = emailString ? JSON.parse(emailString) : null;
        return email;
    }

    const getID = () => {
        const idString = sessionStorage.getItem('id');
        const id = idString ? JSON.parse(idString) : null;
        return id;
    }

    const login = (user, id, email) => {        
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('id', JSON.stringify(id));
        sessionStorage.setItem('email', JSON.stringify(email));        
        setUser(user);        
        setEmail(email)
        setID(id)        
    }

    const logout = () => {        
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('email');                        
        setUser(null);        
        setEmail(null)
        setID(null)        
    }

    const isAuthenticated = () => {
        const user = getUser();        
        const id = getID()
        const email = getEmail()

        return user !== null && id !== null && email !== null;
    }


    return {
        id,
        user,        
        email,        
        login,
        logout,
        isAuthenticated,
        getUser,        
        getID,
        getEmail,        
    }
}