import React from 'React';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { BaseNavigation } from './routes';


const App = () => (
    <Provider store={Store}>
            <BaseNavigation />
    </Provider>
);

export default App;