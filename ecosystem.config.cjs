// @ts-ignore
module.exports = {
    apps: [
        {
            name: 'official-site-api-server',
            script: './dist/app/api/index.js',
            watch: true,
            time: true,
            instances: 4,
            log_date_format: 'YY.MM.DD HH:mm Z',
            ignore_watch: ['.git', '.DS_Store', 'node_modules'],
            env: {
                name: 'dev-official-site-api-server',
                NODE_ENV: 'development',
            },
            env_staging: {
                name: 'staging-official-site-api-server',
                NODE_ENV: 'staging',
                watch: false,
                NETWORK: 'bscTest',
            },
            env_production: {
                name: 'prod-official-site-api-server',
                NODE_ENV: 'production',
                watch: false,
                NETWORK: 'bsc',
                exec_mode: 'cluster_mode'
            },
        },
        {
            name: 'official-site-batch-server',
            script: './dist/app/batch/index.js',
            watch: true,
            time: true,
            log_date_format: 'YY.MM.DD HH:mm Z',
            ignore_watch: ['.git', '.DS_Store', 'node_modules'],
            env: {
                name: 'dev-official-site-batch-server',
                NODE_ENV: 'development',
            },
            env_staging: {
                name: 'staging-official-site-batch-server',
                NODE_ENV: 'staging',
                watch: false,
                NETWORK: 'bscTest',
            },
            env_production: {
                name: 'prod-official-site-batch-server',
                NODE_ENV: 'production',
                watch: false,
                NETWORK: 'bsc',
            },
        },
    ],
};
