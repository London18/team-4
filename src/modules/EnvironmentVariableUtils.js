/**
 * Contains helper methods related to environment variables (i.e. the ones set by Webpack).
 */
let EnvironmentVariableUtils = (function() {
    const _isThisADevelopmentBuild = () => {
        return true; /* This won't be reached if ENV.DEVELOPMENT throws a ReferenceError */
    };

    return ({
        /**
         * Inspects the ENV.DEVELOPMENT environment variable in order to figure out if this is a development build.
         * Returns true if ENV.DEVELOPMENT is defined. Otherwise it returns false.
         */
        isThisADevelopmentBuild: _isThisADevelopmentBuild,
    });
})();

export default EnvironmentVariableUtils;
