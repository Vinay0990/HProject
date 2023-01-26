package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "questions")
@Data
@NoArgsConstructor
public class Question {
	@Id
	private String id;

	private String question;
	
	private String type;

	private int points;

	public Question(String question, int points, String type) {
		this.question = question;
		this.points = points;
		this.type = type;
	}

}
