var choiceCoursesJson = 
{
  "type": "choice_courses",
  "message0": "קורסי בחירה %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check": "Course"
    }
  ],
  "inputsInline": false,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};


Blockly.Blocks['choice_courses'] = {
  init: function() {
    this.jsonInit(choiceCoursesJson);
  }
};