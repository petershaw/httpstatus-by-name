
var   assert 		= require("assert")
	, chai 			= require("chai")
	;
	
var status = require("../index");

describe('Module httpstatus-by-name', function(){
 	it('should return a statuscode 301 for Moved_Permanently', function(){

    	chai.expect( status ).to.have.property(
    		'Moved_Permanently'
    	);

    	chai.expect( status.Moved_Permanently ).to.be.a(
    		'Number'
    	);

    	chai.expect( status.Moved_Permanently ).to.equal(
    		301
    	);

 	});
 	
 });
 