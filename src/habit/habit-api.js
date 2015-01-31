define(function () {
    "use strict";

    /**
     *	The ApiWrapper is used to create an API with private methods
     *	The protected methods are passed into the module controller,
     * 	so it can send events outside the controller.
     */
    function ApiWrapper(moduleController) {

    	function protectedMethod() {

    	}


    	class Api {
            constructor () {
                moduleController.setProtectedApi({
                    protectedMethod: protectedMethod
                });
            }
    		fetchData () {
    			moduleController.fetchData();
    		}
    	}

    	return new Api();

    }

    ApiWrapper.$inject = ['habitController'];

    return ApiWrapper;
});