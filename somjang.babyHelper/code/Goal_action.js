module.exports.function = function goal_action (food, age, ingredient, goal_flag) {

var Result = "나는 기본값이에요.";


if (goal_flag == "eat_possible") {

  if (food == "이유식") {
    Result = "이유식은 5개월부터 먹어요"
  }
  else if (food == "쌀미음") {
    Result = "쌀미음은 5개월 부터 먹을 수 있어요."
  }
  else if (food == "밥") {
    Result = "10개월 이상부터 먹는 게 좋아요."
  }
  if (ingredient == "쌀" || ingredient == "감자") {
    Result = "5개월 이상부터 먹을 수 있어요."
  }
  else if (ingredient == "소고기" || ingredient == "당근") {
    Result = "6개월 이상부터 먹을 수 있어요."
  }
  else if (ingredient == "시금치" || ingredient == "미역") {
    Result = "8개월 이상부터 먹을 수 있어요."
  }

  if (age < 5) {
      Result = "아직 모유수유 할 때입니다."
  }

  else if (age > 4 && age < 7) {
    if (food == "이유식" || food == "쌀미음" || food == "감자미음") {
      Result = food + "먹을 수 있어요"
    }
    else {
      Result = '아직은 먹을 수 없어요.'
    }
    if (ingredient == "감자" || ingredient == "쌀") {
      Result = "먹을 수 있어요"
    }
    else {
      Result = "아직은 먹을 수 없어요"
    }
  }

  else if (age > 6 && age < 9) {
    if (food == "이유식" || food == "소고기이유식" || food == "당근이유식") {
      Result = "먹을 수 있어요"
    }
    else {
      Result = '아직은 먹을 수 없어요.'
    }
    if (ingredient == "소고기" || ingredient == "당근") {
      Result = "먹을 수 있어요"
    }
    else {
      Result = "아직은 먹을 수 없어요"
    }
  }

  else if (age > 7 && age < 11) {
    if (food == "이유식" || food == "시금치스프" || food == "미역국") {
      Result = "먹을 수 있어요"
    }
    else {
      Result = '아직은 먹을 수 없어요.'
    }
    if (ingredient == "시금치" || ingredient == "미역") {
      Result = "먹을 수 있어요"
    }
    else {
      Result = "아직은 먹을 수 없어요"
    }
  }

  else if (age > 9) {
    Resut = "이제는 밥도 잘 먹을 수 있는 나이가 되었어요"
  }
}
  return Result;
}