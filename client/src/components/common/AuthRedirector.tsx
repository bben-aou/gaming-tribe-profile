import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';
import { FormattedMessage } from 'react-intl';

const OAuthRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider } = useParams<{ provider: string }>();
  const {  OAuthAuthentication } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    const handleLogin = async () => {
      if (!token || !provider) {
        navigate('/login', { state: { error: 'Authentication failed. Missing token or provider.' } });
        return;
      }

      try {
        switch (provider) {
          case 'github':
            await OAuthAuthentication(token);
            break;
          default:
            throw new Error(`Unsupported provider: ${provider}`);
        }
        navigate('/profile');
      } catch (error) {
        console.error('Authentication error:', error);
        navigate('/login/sign-in', { state: { error: 'Authentication failed. Please try again.' } });
      }
    };

    if (token) {
      handleLogin();
    } else {
      const error = params.get('error');
      if (error) {
        console.error('Authentication error:', error);
        navigate('/login/sign-in', { state: { error: 'Authentication failed. Please try again.' } });
      } else {
        navigate('/login/sign-in');
      }
    }
  }, [location, OAuthAuthentication, navigate, provider]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>
        <FormattedMessage id="OAuthRedirect.processing.authentication.title"/>
      </p>
    </div>
  );
};

export default OAuthRedirect;