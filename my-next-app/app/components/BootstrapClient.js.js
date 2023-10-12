'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
        // require('socket.io/client-dist/socket.io.js');
        require('underscore/underscore-min.js');
        // require('echarts/dist/echarts.js');
        // import echarts from 'echarts/dist/echarts.js';
        require('jquery/dist/jquery.min.js');
    }, []);

    return null;
}
