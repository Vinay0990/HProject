package com.example.demo.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Question;
import com.example.demo.repo.QuestionRepository;

@Service
public class QuestionService {

	@Autowired
	QuestionRepository repo;

	public void addQuestions() {
		repo.deleteAll();
		repo.save(new Question("Comfortable working environment", 15, "Workplace"));
		repo.save(new Question("Cleaning of the work environment", 10, "Workplace"));
		repo.save(new Question("Equipment availability", 15, "Workplace"));
		repo.save(new Question("Resting areas", 10, "Workplace"));
		repo.save(new Question("Lighting conditions", 10, "Workplace"));
		repo.save(new Question("Thermal environment", 10, "Workplace"));
		repo.save(new Question("Quality of food", 10, "Workplace"));

		repo.save(new Question("I have gotten the preparation to carry out my job well.", 10, "Job Satisfaction"));
		repo.save(new Question("The measure of work I am expected to do is sensible", 10, "Job Satisfaction"));
		repo.save(new Question("The work I am expected to do is aligned with my expertise", 10, "Job Satisfaction"));
		repo.save(new Question("Most days, I see positive outcomes in light of my work.", 10, "Job Satisfaction"));
		repo.save(new Question("My work is appreciated by this company.", 15, "Job Satisfaction"));

		repo.save(new Question("My colleagues I work with approach me with respect.", 15, "Team Satisfaction"));
		repo.save(new Question("My colleagues and I clearly talk about what should be done to be more efficient.", 15,
				"Team Satisfaction"));
		repo.save(new Question("My colleagues I work with help me achive the best results.", 15, "Team Satisfaction"));
		repo.save(new Question("My ideas are taken into consideration by my team.", 15, "Team Satisfaction"));
		repo.save(new Question("My team enables me to be best of myself at workplace.", 15, "Team Satisfaction"));
		repo.save(new Question("My teammates are helpful and responsive to my queries.", 15, "Team Satisfaction"));
	}

	public List<Question> getAllQuestion() {
		return repo.findAll();
	}

	public List<Question> getASurvey() {
		List<Question> survey = new ArrayList<>();
		String[] types = { "Team Satisfaction", "Job Satisfaction", "Workplace" };
		Random r = new Random();
		List<Question> results = new ArrayList<>();
		Stream.of(types).map(s -> {
			List<Question> temp = repo.findByType(s);
			Collections.shuffle(temp);
			return temp.subList(0, 3);
		}).forEach(results::addAll);
		System.out.println(results.size());
		return results;
	}

}
