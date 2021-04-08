// Do not wrap this inside a closure, otherwise tests will fail
// If you want to add a new key, verify that there is no collision with the config file in
// https://dev.azure.com/senacor-zur/Kundenportal/_git/common-config?path=%2F&version=GBmaster
// add your new key also to the master config in the repo above!
window.ENV_CONFIG = {
    SERVICE_HOSTS: {
        POLICIES: 'http://localhost:8090',
        MOTOR: 'http://motor.service.zurichnextgen.com',
        POSTBOX: 'http://mock.postbox.zurichnextgen.com'
    },
    KEYCLOAK: {
        CUSTOMER_PORTAL: {
            BASE_URL: 'http://ldapkeycloak.zurichnextgen.com:25080',
            REALM: 'kundenportal',
            CLIENT: 'admin-cli',
            AUTO_LOGOUT_TIMEOUT_IN_MS: 1000 * 60 * 120
        },
        INTERN: {
            BASE_URL: 'http://ldapkeycloak.zurichnextgen.com:25080',
            REALM: 'kundenportal',
            CLIENT: 'admin-cli',
            AUTO_LOGOUT_TIMEOUT_IN_MS: 1000 * 60 * 120
        }
    },
    REDIRECTS: {
        LOGIN_PAGE: 'http://account.login.zurichnextgen.com/demo/index.html'
    }
};
