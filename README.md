
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answers: getElementById একটি এলিমেন্ট রিটার্ন করে কিন্তু getElementsByClassName একাধিক এলিমেন্ট নিয়ে আসে যা থাকে, querySelector প্রথম matching element return করে ও  id, class, tag — সব দিয়ে কাজ করে CSS selector ব্যবহার করতে হয় (#, .) কিন্তু querySelectorAll সব matching element return করে, id, class, tag — সব দিয়ে কাজ করে CSS selector ব্যবহার করতে হয় (#, .)।
### 2. How do you create and insert a new element into the DOM?
Answers: let div = document.createElement("div"); এবং div.innerHTML অথবা classList, innerText , appendChild করে।
### 3. What is Event Bubbling? And how does it work?
Answers: কোনো child element এ event ঘটলে সেই event ধাপে ধাপে তার parent থেকে তার grandparent এর মধ্যে থাকা এলিমেন্ট নিয়ে কাজ করা যায়।  
### 4. What is Event Delegation in JavaScript? Why is it useful?
Answers: child element এ আলাদা করে event listener না দিয়ে তাদের common parent element এ একটি মাত্র event listener ব্যবহার করে child কে handle করা যায়। একাধিক বাটন থাকলেও একটি মাত্র listener ব্যাবহার করে ক্লিন ও প্রফেশনাল কোড করা যায়।

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answers: event.preventDefault() Browser এর default behavior বন্ধ করে দেয় এবং এটা reload বন্ধ করে দেয়। event.stopPropagation() Event যেন parent element এ না যায় (Bubbling বন্ধ করে)।

