package com.docs.app.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.docs.app.beans.ApplicationResponse;
import com.docs.app.beans.ApplicationResponse.ApplicationResponseType;

@RestController
@RequestMapping("/articles")
public class Articles extends BaseController {
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public ApplicationResponse<String> getById(@PathVariable final int id) {
		if (id > 0) {
			
		}
		
		return this.getStringResponse(ApplicationResponseType.BAD_REQUEST, "Invalid hash tag provided.");
	}
}
