import { makeAutoObservable } from 'mobx';

class WordStore {
  words = []; // Коллекция всех слов

  constructor() {
    makeAutoObservable(this);
  }

  // Получение списка слов (эмуляция запроса на сервер)
  async fetchWords() {
    // В реальной ситуации это будет запрос к серверу
    const response = await fetch('https://api.example.com/words'); // замените на ваш URL
    const data = await response.json();
    this.words = data;
  }

  // Добавление нового слова
  addWord(word) {
    this.words.push(word);
  }

  // Удаление слова
  removeWord(wordId) {
    this.words = this.words.filter(word => word.id !== wordId);
  }

  // Обновление слова
  updateWord(updatedWord) {
    const index = this.words.findIndex(word => word.id === updatedWord.id);
    if (index !== -1) {
      this.words[index] = updatedWord;
    }
  }
}

const wordStore = new WordStore();
export default wordStore;
