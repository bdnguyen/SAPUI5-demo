sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	], 
	
	function (UIComponent, JSONModel) {
		"use strict";
		return UIComponent.extend("sap.ui.demo.wt.Component", {
			metadata : {
				manifest: "json"
			},
			
			init : function () {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);
				// set data model
				var oData = {
					recipient : {
						name : "Universe"
					}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				
			}
		});
	}
);