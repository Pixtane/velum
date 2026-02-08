import { db } from "./index";
import { quotesTable } from "./schema";

async function seed() {
  console.log("🕊️ Starting the Sacred Seed...");

  const quotes = [
    // --- ENGLISH ---
    {
      quote: "The measure of love is to love without measure.",
      author: "St. Bernard",
      category: "Theology",
      language: "en",
    },
    {
      quote: "Late have I loved you, O Beauty ever ancient, ever new.",
      author: "St. Augustine",
      category: "Theology",
      language: "en",
    },
    {
      quote: "Our heart is restless until it rests in Thee.",
      author: "St. Augustine",
      category: "Theology",
      language: "en",
    },
    {
      quote: "He who has God has everything.",
      author: "St. Benedict",
      category: "Principle",
      language: "en",
    },
    {
      quote: "The world is a book; those who don't travel read one page.",
      author: "St. Augustine",
      category: "Wisdom",
      language: "en",
    },
    {
      quote: "Character is what you are in the dark.",
      author: "D.L. Moody",
      category: "Virtue",
      language: "en",
    },
    {
      quote: "To be is to do.",
      author: "Socrates",
      category: "Philosophy",
      language: "en",
    },
    {
      quote: "The soul is healed by being with children.",
      author: "English Proverb",
      category: "Wisdom",
      language: "en",
    },
    {
      quote: "Waste no more time arguing what a good man should be. Be one.",
      author: "Marcus Aurelius",
      category: "Virtue",
      language: "en",
    },
    {
      quote: "He who is not contented with what he has, would not be.",
      author: "Socrates",
      category: "Virtue",
      language: "en",
    },
    {
      quote: "Pray as though everything depended on God.",
      author: "St. Augustine",
      category: "Theology",
      language: "en",
    },
    {
      quote: "Patience is the companion of wisdom.",
      author: "St. Augustine",
      category: "Wisdom",
      language: "en",
    },
    {
      quote: "Humility is the foundation of all the other virtues.",
      author: "St. Augustine",
      category: "Virtue",
      language: "en",
    },
    {
      quote: "Do not be overcome by evil, but overcome evil with good.",
      author: "St. Paul",
      category: "Theology",
      language: "en",
    },
    {
      quote: "The truth is like a lion; you don’t have to defend it.",
      author: "St. Augustine",
      category: "Principle",
      language: "en",
    },

    // --- UKRAINIAN ---
    {
      quote: "Хто має Бога, той має все.",
      author: "Св. Августин",
      category: "Теологія",
      language: "uk",
    },
    {
      quote: "Любов вища за всі знання.",
      author: "Св. Іван Золотоустий",
      category: "Теологія",
      language: "uk",
    },
    {
      quote: "Не бійся, тільки віруй.",
      author: "Євангеліє",
      category: "Теологія",
      language: "uk",
    },
    {
      quote: "Пізнай самого себе.",
      author: "Григорій Сковорода",
      category: "Філософія",
      language: "uk",
    },
    {
      quote: "Любов виникає з любові.",
      author: "Григорій Сковорода",
      category: "Філософія",
      language: "uk",
    },
    {
      quote: "Чиста совість є найкращим лікарем.",
      author: "Григорій Сковорода",
      category: "Доброчесність",
      language: "uk",
    },
    {
      quote: "Хто думає про науку, той любить Бога.",
      author: "Григорій Сковорода",
      category: "Мудрість",
      language: "uk",
    },
    {
      quote: "Не все те отрута, що неприємне на смак.",
      author: "Григорій Сковорода",
      category: "Мудрість",
      language: "uk",
    },
    {
      quote: "Все минає, а любов залишається.",
      author: "Св. Павло",
      category: "Теологія",
      language: "uk",
    },
    {
      quote: "Бути щасливим — це пізнати себе.",
      author: "Григорій Сковорода",
      category: "Філософія",
      language: "uk",
    },
    {
      quote: "Добро не в словах, а в серці.",
      author: "Св. Василь Великий",
      category: "Доброчесність",
      language: "uk",
    },
    {
      quote: "Молитва — це ключ до неба.",
      author: "Св. Іван Дамаскин",
      category: "Теологія",
      language: "uk",
    },
    {
      quote: "Світ ловив мене, та не впіймав.",
      author: "Григорій Сковорода",
      category: "Філософія",
      language: "uk",
    },
    {
      quote: "Немає вищої честі, ніж служити Правді.",
      author: "Св. Іван Золотоустий",
      category: "Принцип",
      language: "uk",
    },
    {
      quote: "Бог є любов, і хто перебуває в любові, перебуває в Бозі.",
      author: "Св. Іван Богослов",
      category: "Теологія",
      language: "uk",
    },
  ];

  try {
    await db.insert(quotesTable).values(quotes);
    console.log(`✅ Successfully seeded ${quotes.length} premium quotes.`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
}

seed();
