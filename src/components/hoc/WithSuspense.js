import React from 'react';
import Preloader from '../common/preloader';

export const WithSupsense = (Component) => {
    return (props) => {
       return  <React.Suspense fallback={<div><Preloader /></div>}>
            <Component {...props} />
        </React.Suspense>
    }
}