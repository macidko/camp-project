import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    // url yönlendirmesi için kullanılan router-dom hook'u
    const navigate = useNavigate()
    // signout fonksiyonu
    function handleSignOut() {
        // isAuthenticated state'inin false olarak ayarlanması
        setIsAuthenticated(false)
        // anasayfaya yönlendirilmesi
        navigate("/");
    }
    // signin fonksiyonu
    function handleSignIn() {
        // isAuthenticated state'inin true olarak ayarlanması
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        {/* Redux storedaki initialValue'nun durumuna göre sepet componentinin gösterilmesi */}
                        {cartItems.length > 0 && <CartSummary />}
                        {/* isAuthenticated durumuna göre SignedIn veya SignedOut componentinin gösterilmesi */}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
