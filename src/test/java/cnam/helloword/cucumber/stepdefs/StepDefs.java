package cnam.helloword.cucumber.stepdefs;

import cnam.helloword.HelloWordCnamApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = HelloWordCnamApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
