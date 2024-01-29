// public class Main {
//     public static void main(String[] args) {

//         System.out.println("Столбец чисел от 1 до 100:");
//         for (int i = 1; i <= 100; i++) {
//             System.out.println(i);
//         }

\
//         System.out.println("\nСтолбец чисел от 11 до 33:");
//         for (int i = 11; i <= 33; i++) {
//             System.out.println(i);
//         }


//         System.out.println("\nСтолбец четных чисел от 0 до 100:");
//         for (int i = 0; i <= 100; i += 2) {
//             System.out.println(i);
//         }


//         int sum = 0;
//         for (int i = 1; i <= 100; i++) {
//             sum += i;
//         }
//         System.out.println("\nСумма чисел от 1 до 100: " + sum);
//     }
// }

////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array1 = {1, 2, 3, 4, 5};
//         System.out.println("Элементы массива:");
//         for (int i = 0; i < array1.length; i++) {
//             System.out.println(array1[i]);
//         }


//         int[] array2 = {1, 2, 3, 4, 5};
//         int result = 0;
//         for (int i = 0; i < array2.length; i++) {
//             result += array2[i];
//         }
//         System.out.println("\nСумма элементов массива: " + result);
//     }
// }

////////////////////////////////////////////////////

// import java.util.HashMap;
// import java.util.Map;

// public class Main {
//     public static void main(String[] args) {

//         Map<String, Object> obj = new HashMap<>();
//         obj.put("key1", "value1");
//         obj.put("key2", 42);
//         obj.put("key3", true);


//         System.out.println("Ключи и элементы объекта:");
//         for (Map.Entry<String, Object> entry : obj.entrySet()) {
//             System.out.println("Ключ: " + entry.getKey() + ", Элемент: " + entry.getValue());
//         }
//     }
// }


//////////////////////////////////////////////////////////

// import java.util.HashMap;
// import java.util.Map;

// public class Main {
//     public static void main(String[] args) {

//         Map<String, String> obj = new HashMap<>();
//         obj.put("Коля", "200");
//         obj.put("Вася", "300");
//         obj.put("Петя", "400");


//         for (Map.Entry<String, String> entry : obj.entrySet()) {
//             System.out.println(entry.getKey() + " - зарплата " + entry.getValue() + " долларов.");
//         }
//     }
// }

///////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array = {2, 5, 9, 15, 0, 4};


//         System.out.println("Элементы массива больше 3 и меньше 10:");
//         for (int i = 0; i < array.length; i++) {
//             if (array[i] > 3 && array[i] < 10) {
//                 System.out.println(array[i]);
//             }
//         }
//     }
// }


////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array = {2, -5, 9, -15, 0, 4};


//         int sumOfPositives = 0;
//         for (int i = 0; i < array.length; i++) {
//             if (array[i] > 0) {
//                 sumOfPositives += array[i];
//             }
//         }


//         System.out.println("Сумма положительных элементов массива: " + sumOfPositives);
//     }
// }


///////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array = {1, 2, 5, 9, 4, 13, 4, 10};


//         for (int i = 0; i < array.length; i++) {
//             if (array[i] == 4) {
//                 System.out.println("Есть!");

//                 break;
//             }
//         }
//     }
// }

////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array = {10, 20, 30, 50, 235, 3000};


//         System.out.println("Числа, начинающиеся на 1, 2 или 5:");
//         for (int i = 0; i < array.length; i++) {

//             String numAsString = String.valueOf(array[i]);


//             if (numAsString.startsWith("1") || numAsString.startsWith("2") || numAsString.startsWith("5")) {
//                 System.out.println(array[i]);
//             }
//         }
//     }
// }

////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};


//         StringBuilder result = new StringBuilder("-");
//         for (int i = 0; i < array.length; i++) {
//             result.append(array[i]).append("-");
//         }


//         System.out.println(result.toString());
//     }
// }

////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {

//         String[] daysOfWeek = {"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};


//         for (int i = 0; i < daysOfWeek.length; i++) {
//             // Проверяем, является ли текущий день выходным
//             if (i >= 5) {

//                 System.out.println("\033[1m" + daysOfWeek[i] + "\033[0m");
//             } else {

//                 System.out.println(daysOfWeek[i]);
//             }
//         }
//     }
// }

////////////////////////////////////////////////

// import java.time.DayOfWeek;
// import java.time.LocalDate;

// public class Main {
//     public static void main(String[] args) {
//      
//         DayOfWeek currentDayOfWeek = LocalDate.now().getDayOfWeek();


//         String[] daysOfWeek = {"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};


//         for (int i = 0; i < daysOfWeek.length; i++) {
//            
//             if (i + 1 == currentDayOfWeek.getValue()) {
              
//                 System.out.println("\033[3m" + daysOfWeek[i] + "\033[0m");
//             } else {
              
//                 System.out.println(daysOfWeek[i]);
//             }
//         }
//     }
// }

////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int n = 1000;
//         int num = 0;

//         while (n >= 50) {
//             n /= 2;
//             num++;
//         }

//         System.out.println("Полученное число: " + n);
//         System.out.println("Количество итераций: " + num);
//     }
// }


////////////////////////////////////////////////