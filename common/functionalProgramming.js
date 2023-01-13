/**
 * 함수형 프로그래밍
 */

// 순수함수 (Pure function)
exports.add = async (a, b) => {
    /**
     * 동일한 입력에는 항상 같은 값을 반환해야 하는 함수
     * 함수의 실행이 프로그램의 실행에 영향을 미치지 않아야 하는 함수
     * 함수 내부에서 인자의 값을 변경하거나 프로그램 상태를 변경하는 side effect가 없는 것
     */
    return a+b;
}

// 비상태, 불변셩 (Stateless, Immutability)
exports.increaseAge = async (person) => {
    /**
     * 1. 함수형 프로그래밍에서의 데이터는 변하지 않는 불변성을 유지해야 한다.
     * 2. 데이터의 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터 의 복사본을 만들어서 그 일부를 변경하고, 변경한 복사본을 사용해 작업을 진행합니다.
     */
    return {...person, age: person.age + 1};
}


/**
 * 선언형 함수 (Expressions)
 * 명령형 프로그래밍은 무엇을 어떻게 할 것인가에 주목하고, 선언형 프로그래밍은 무엇을 할 것인가에 주목한다.
 */

// 명령형 프로그래밍
// exports.multiply = async (numbers, multiplier) => {
//     // 아래 예시에서는 for문을 사용해서 배열의 각 요소에 multiplier 곱해주는 명령형 프로그래밍이다.
//     for(let i = 0; i < numbers.length; i++) {
//         numbers[i] = numbers[i] * multiplier;
//     }
// }
// 함수형 프로그래밍에서는 마찬가지로 if, switch, for 등 명령문을 사용하지 않고 함수형 코드로 사용해야한다.

// 선언형 프로그래밍
exports.multiply = async (number, multiplier) => {
    return await number.map((num) => num * multiplier);
}