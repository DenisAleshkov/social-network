export const required = value => {
        if (value) return undefined;
        return 'Field is required';
    }
    //замыкание это когда функция возвращает другую функцию
    //и может получать доступ к переменным которые находятся 
    //в родительской функции
export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}