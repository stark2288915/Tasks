function createWordFrequencyRanking(text) {
    // Преобразование текста в нижний регистр и удаление знаков препинания
    const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '');

    // Разделение текста на слова
    const words = cleanedText.split(/\s+/);

    // Создание объекта для хранения частоты встречаемости слов
    const wordFrequency = {};

    // Подсчет частоты встречаемости слов
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Преобразование объекта в массив для сортировки
    const ranking = Object.entries(wordFrequency);

    // Сортировка массива по частоте встречаемости
    ranking.sort((a, b) => b[1] - a[1]);

    return ranking;
}

// Пример использования
const text = "The chase is better than the catch\n" +
    "Transforming the tunes\n" +
    "We need your support\n" +
    "If you got the breath back\n" +
    "It's the first page of the second chapter\n" +
    "Hold your back for the rhythym attack\n" +
    "Coming down on the floor like a maniac\n" +
    "Hold your back for the rhythym attack\n" +
    "Get down in full effect\n" +
    "Hold your back for the rhythym attack\n" +
    "Coming down on the floor like a maniac\n" +
    "Hold your track so clean up the dish\n" +
    "By the way\n" +
    "How much is the fish?\n" +
    "How much is the fish?\n" +
    "Here we go\n" +
    "Here we go\n" +
    "Here we go again\n" +
    "Yeah!\n" +
    "Sunshine in the air\n" +
    "We're breaking the rules\n" +
    "Ignore the machine\n" +
    "You won't ever stop this\n" +
    "The chase is better than the catch\n" +
    "Hold your back for the rhythym attack\n" +
    "Coming down on the floor like a maniac\n" +
    "Hold your back for the rhythym attack\n" +
    "Get down in full effect\n" +
    "Hold your back for the rhythym attack\n" +
    "Coming down on the floor like a maniac\n" +
    "Hold your track so clean up the dish\n" +
    "By the way\n" +
    "How much is the fish?\n" +
    "How much is the fish?\n" +
    "Yee-hah!\n" +
    "Sunshine in the air\n" +
    "Come on!\n" +
    "Na-na na na na\n" +
    "Everybody\n" +
    "Na na na na na\n" +
    "Come on\n" +
    "Na na na na na\n" +
    "Together\n" +
    "Na na na na na\n" +
    "Yeah\n" +
    "Na na na na na\n" +
    "Yeah!\n" +
    "Na na na na na\n" +
    "How much is the fish?\n" +
    "Na na na na na\n" +
    "Na na na na na\n" +
    "How much is the fish\n" +
    "Na na na na na\n" +
    "Yeah\n" +
    "Na na na na na\n" +
    "Na na na na na\n" +
    "Come on come on\n" +
    "Aah!\n" +
    "Resurrection";






const wordRanking = createWordFrequencyRanking(text);
console.log(wordRanking);
