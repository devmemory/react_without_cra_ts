import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from 'util/routes';

const App = () => {
    return (
        <Suspense fallback={<div />}>
            <RouterProvider router={routes} />
        </Suspense>
    );
};

export default App;