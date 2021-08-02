import React from 'react';
import OAuth2Login from '@okteto/react-oauth2-login';
import { useAuth } from '../../Hooks/Auth';
import logoImg from '../../assets/logo.png';
import {
    Container,
    Logo
} from './styles'

const Login: React.FC = () => {
    const { onSuccess, onFailure } = useAuth();
    return (
        <Container>
            <Logo src={logoImg} alt="Logo" />
            <OAuth2Login clientId={process.env.REACT_APP_CLIENT_ID}
                authorizeUri="http://github.com/login/oauth/authorize"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className='GitHubButton'
                buttonText='Login'
            />
        </Container>
    );
}

export default Login;