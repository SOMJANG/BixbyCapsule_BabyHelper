module.exports.function = function goal_action (food, human, goal_flag) {

var Result = "나는 기본값이에요.";

if(goal_flag == "recipe") {
  if(food == "쌀미음") {
    Result = "물에 쌀을 불리고 믹서기에 갈아준 뒤 약불로 끓인다"
  }

  if(food == "소고기 당근 무른 밥") {
    Result = "소고기를 삶고 당근을 자르고 같이 끓인다"
  }
}

if(goal_flag == "eat_possible") {
  if(food == "쌀미음") {
    if(human == "아기") {
      Result = "먹으면 죽어요"
    }
    if(human == "아저씨") {
      Result = "먹어도 돼요"
    }
    
    if(human == "아줌마") {
      Result = "아줌마는 먹어도 괜찮아요"
    }
  }
}
  return Result;
}
