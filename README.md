# Ticle

Небольшая библиотека, расширяющая возможности стандартных `setTimeout` и `setInterval`. 

# Возможности

 * Установка таймеров в отдельном потоке. Некоторые бразеры понижают приоритет таймеров, при переходе в другую вкладку или сворачивание окна, это приводит к задержке срабатывания. Для таймеров, работающих в отдельном потоке такая проблема отсутствует.
 
 * Подсчет разницы во времени между стартом отсчета и срабатывание коллбэка.
 
 # Установка 
 ```
 $ npm install ticle
 ```
 или
 ```
 <script src="https://unpkg.com/ticle@1.0.0/build/ticle.js">
 ```
 # Как пользоваться

Таймер в отдельном потоке
```
import Ticle from 'ticle';

const WorkerTimer = new Ticle.WorkerTimer({ recordDiff: true });

WorkerTimer.setTrustyInterval(
    (diff, arg1) => console.log(diff, arg1),
    1000, 'привет');

// 1001, привет
// ...
```
Обычный
```
import Ticle from 'ticle';

const WorkerTimer = new Ticle.SimpleTimer({ recordDiff: true });

WorkerTimer.setInterval(
    (diff, arg1) => console.log(diff, arg1),
    1000, 'привет');
```

Некоторые примеры можно посмотреть в `examples/`.

# Таймеры

* `WorkerTimer(options)` - установка таймеров в отдельном потоке
* `SimpleTimer(options)` - обычная установка таймеров

# Методы

* **setTimeout(func: Function, delay: number [, ...args])** - тоже самое, что `setTimeout`, `...args` - любое кол-во аргументов, передаваемых в коллбэк `func`.

* **setInterval(func: Function, delay: number [, ...args])** - тоже самое, что `setInterval`.

* **setTrustyInterval(func: Function, delay: number [, ...args])** - тоже самое, что `setInterval`, только реализован на `setTimeout`.

* **clearTimeout(id: number)** - тоже самое, что `clearTimeout`.

* **clearInterval(id: number)** - тоже самое, что `clearInterval`.

* **clearTrustyInterval(id: number)** - тоже самое, что `clearTimeout`, но для `setTrustyInterval`.

# Опции

* **recordDiff** - записывать ли разцицу во времени между стартом отсчета до выполнения и срабатыванием. Результат передается как 1-й аргумент коллбэка.
