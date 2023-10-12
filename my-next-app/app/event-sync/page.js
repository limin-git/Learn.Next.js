'use client';
import echarts from 'echarts/dist/echarts.js';
import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function Page() {
    const CHART_LENGTH = 5 * 60; // 3 minutes

    // const echarts_hash_speed_dom = document.getElementById('echarts-hash-speed');
    // const echarts_hash_speed_chart = echarts.init(echarts_hash_speed_dom);

    // const echarts_sync_speed_dom = document.getElementById('echarts-sync-speed');
    // const echarts_sync_speed_chart = echarts.init(echarts_sync_speed_dom);

    // const echarts_hash_table_pie_dom = document.getElementById('echarts-hash-table-pie');
    // const echarts_hash_table_pie_chart = echarts.init(echarts_hash_table_pie_dom);

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <>
            <div>Hello Event Sync!</div>

            <div class="container-fluid">
                <div class="row mt-3 mb-3">
                    <div class="col-4">
                        <div class="card bg-light">
                            <div class="card-header">OPTIONS</div>
                            <div class="card-body">
                                <pre>
                                    <code class="card-text" id="config_text"></code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row row-cols-3 mb-3">
                    <div class="col">
                        <div class="card bg-light">
                            <div class="card-header">OCC</div>
                            <div class="card-body">
                                <pre>
                                    <code class="card-text" id="occ_text"></code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-light">
                            <div class="card-header">STATION</div>
                            <div class="card-body">
                                <pre>
                                    <code class="card-text" id="station_text"></code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-light">
                            <div class="card-header">HASH TABLE</div>
                            <div class="card-body">
                                <pre>
                                    <code class="card-text" id="hash_text"></code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="echarts-hash-speed" style={{ width: 300, height: 300 }}></div>
                    <div id="echarts-sync-speed" style={{ width: 300, height: 300 }}></div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-1"></div>
                    <div id="echarts-hash-table-pie" style={{ width: 500, height: 500 }}></div>
                    <div class="col-1"></div>
                </div>
            </div>

            <ReactECharts option={options} />

            <div class="fixed-bottom">
                <p id="timestamp">Timestamp</p>
            </div>
        </>
    );
}
