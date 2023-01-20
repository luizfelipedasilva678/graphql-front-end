import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { GQL_LOGIN } from '../../graphql/mutations/auth';
import './App.css';

const App = () => {
  const [mutateFunction, { data }] = useMutation(GQL_LOGIN);

  useEffect(() => {
    const teste = async () => {
      await mutateFunction({
        variables: {
          data: {
            username: 'teste.teste3',
            password: '1234',
          },
        },
      });
    };

    teste();
  }, []);

  console.log('test', data);
  return <h1>Test</h1>;
};

export default App;
