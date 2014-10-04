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


    	function Api() {
    		moduleController.setProtectedApi({
    			protectedMethod: protectedMethod
    		});
    	}

    	Api.prototype = {
    		fetchData: function () {
    			moduleController.fetchData();
    		}
    	};

    	return new Api();

    }

    ApiWrapper.$inject = ['habitModuleController'];

    return ApiWrapper;
});