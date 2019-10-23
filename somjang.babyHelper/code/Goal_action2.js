module.exports.function = function goal_action2 (human, age, goal_flag2) {

var Result = "나는 기본값이에요";

if(age >= 1 && age <= 10) {
  Result = "다리를 열심히 마사지해줘요"
}

if(age > 10 && age <= 20) {
  Result = "머리를 지긋이 눌러줘요. 안그럼 짱구돼요"
}

else {
  Result = "1개월 ~ 10개월 사이는 다리를 열심히 주물러주고 11개월 ~ 20개월 사이에서는 머리를 지긋이 눌러주세요. 안그럼 짱구돼요."
}

  return Result
}
