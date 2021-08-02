import React from 'react';
import OAuth2Login from '@okteto/react-oauth2-login';
import { useAuth } from '../../Hooks/Auth';
import { Container } from './styles'

// {process.env.REACT_APP_URL}
const Login: React.FC = () => {
    const { onSuccess, onFailure } = useAuth();
    return (
        <Container>
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