import React, { useState, useEffect } from 'react';


function App() {
  const [Word, setWord] = useState([
      { word: 'Heathen', meaning: 'Non-religious' },
      { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
      { word: 'Quixotic', meaning: 'Extremely idealistic; unrealistic and impractical' },
      { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
      { word: 'Serendipity', meaning: 'The occurrence and development of events by chance in a happy or beneficial way' },
      { word: 'Panacea', meaning: 'A solution or remedy for all difficulties or diseases' },
      { word: 'Lethargic', meaning: 'Affected by lethargy; sluggish and apathetic' },
      { word: 'Esoteric', meaning: 'Intended for or likely to be understood by only a small number of people with special knowledge' },
      { word: 'Nefarious', meaning: 'Wicked, villainous, or criminal' },
      { word: 'Aplomb', meaning: 'Self-confidence or assurance, especially when in a demanding situation' },

      { word: 'Heathen', meaning: 'Non-religious' },
      { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
      { word: 'Quixotic', meaning: 'Extremely idealistic; unrealistic and impractical' },
      { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
      { word: 'Serendipity', meaning: 'The occurrence and development of events by chance in a happy or beneficial way' },
      { word: 'Panacea', meaning: 'A solution or remedy for all difficulties or diseases' },
      { word: 'Lethargic', meaning: 'Affected by lethargy; sluggish and apathetic' },
      { word: 'Esoteric', meaning: 'Intended for or likely to be understood by only a small number of people with special knowledge' },
      { word: 'Nefarious', meaning: 'Wicked, villainous, or criminal' },
      { word: 'Aplomb', meaning: 'Self-confidence or assurance, especially when in a demanding situation' },
      { word: 'Benevolent', meaning: 'Kindly and well-meaning' },
      { word: 'Cacophony', meaning: 'A harsh, discordant mixture of sounds' },
      { word: 'Debilitate', meaning: 'Make (someone) weak and infirm' },
      { word: 'Effervescent', meaning: 'Bubbly, lively' },
      { word: 'Facetious', meaning: 'Treating serious issues with deliberately inappropriate humor' },
      { word: 'Garrulous', meaning: 'Excessively talkative, especially on trivial matters' },
      { word: 'Hapless', meaning: 'Unfortunate, unlucky' },
      { word: 'Iconoclast', meaning: 'A person who attacks or criticizes cherished beliefs or institutions' },
      { word: 'Juxtapose', meaning: 'Place or deal with close together for contrasting effect' },
      { word: 'Kaleidoscope', meaning: 'A constantly changing pattern or sequence of elements' },
      { word: 'Lugubrious', meaning: 'Looking or sounding sad and dismal' },
      { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
      { word: 'Nascent', meaning: 'Just coming into existence and beginning to display signs of future potential' },
      { word: 'Ostentatious', meaning: 'Characterized by vulgar or pretentious display; designed to impress or attract notice' },
      { word: 'Pernicious', meaning: 'Having a harmful effect, especially in a gradual or subtle way' },
      { word: 'Quotidian', meaning: 'Of or occurring every day; daily' },
      { word: 'Reticent', meaning: 'Not revealing ones thoughts or feelings readily' },
      { word: 'Sycophant', meaning: 'A person who acts obsequiously toward someone important in order to gain advantage' },
      { word: 'Trepidation', meaning: 'A feeling of fear or agitation about something that may happen' },
      { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
      { word: 'Voracious', meaning: 'Wanting or devouring great quantities of food; having a very eager approach to a particular activity' },
      { word: 'Wanderlust', meaning: 'A strong desire to travel' },
      { word: 'Xenophobe', meaning: 'A person who dislikes or is prejudiced against people from other countries' },
      { word: 'Yesteryear', meaning: 'Time past and especially nostalgic or old-fashioned' },
      { word: 'Zephyr', meaning: 'A gentle, mild breeze' },
      { word: 'Belligerent', meaning: 'Hostile and aggressive' },
      { word: 'Clandestine', meaning: 'Kept secret or done secretively, especially because illicit' },
      { word: 'Dilapidated', meaning: 'In a state of disrepair or ruin as a result of age or neglect' },
      { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
      { word: 'Furtive', meaning: 'Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble' },
      { word: 'Grandiose', meaning: 'Impressive or magnificent in appearance or style, especially pretentiously so' },
      { word: 'Hapless', meaning: 'Unfortunate, unlucky' },
      { word: 'Insidious', meaning: 'Proceeding in a gradual, subtle way, but with harmful effects' },
      { word: 'Juxtapose', meaning: 'Place or deal with close together for contrasting effect' },
      { word: 'Kaleidoscope', meaning: 'A constantly changing pattern or sequence of elements' },
      { word: 'Languid', meaning: 'Displaying or having a disinclination for physical exertion or effort; slow and relaxed' },
      { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
      { word: 'Nefarious', meaning: 'Wicked, villainous, or criminal' },
      { word: 'Obfuscate', meaning: 'Render obscure, unclear, or unintelligible' },
      { word: 'Pernicious', meaning: 'Having a harmful effect, especially in a gradual or subtle way' },
      { word: 'Quixotic', meaning: 'Extremely idealistic; unrealistic and impractical' },
      { word: 'Rambunctious', meaning: 'Uncontrollably exuberant; boisterous' },
      { word: 'Sycophant', meaning: 'A person who acts obsequiously toward someone important in order to gain advantage' },
      { word: 'Trepidation', meaning: 'A feeling of fear or agitation about something that may happen' },
      { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
      { word: 'Voracious', meaning: 'Wanting or devouring great quantities of food; having a very eager approach to a particular activity' },
      { word: 'Whimsical', meaning: 'Playfully quaint or fanciful, especially in an appealing and amusing way' },
      { word: 'Xenophobe', meaning: 'A person who dislikes or is prejudiced against people from other countries' },
      { word: 'Yesteryear', meaning: 'Time past and especially nostalgic or old-fashioned' },
      { word: 'Zephyr', meaning: 'A gentle, mild breeze' },
      { word: 'Belligerent', meaning: 'Hostile and aggressive' },
      { word: 'Clandestine', meaning: 'Kept secret or done secretively, especially because illicit' }
      
    
  ]);

  const [currentWord, setCurrentWord] = useState(Word[0]);
  const [streakCount, setStreakCount] = useState(0);
  

  useEffect(() => {
    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        startWordInterval();
      }
    };

    requestNotificationPermission();
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Word.length);
      
      const newWord = Word[randomIndex];
      setCurrentWord(newWord);
      showNotification(newWord.word, newWord.meaning);
    }, 10000); 

    
    return () => clearInterval(intervalId);
  }, [Word]); 


  const showNotification = (word, meaning) => {
    
    if ('Notification' in window) {
      
      if (Notification.permission === 'granted') {
        const notification =new Notification(`NewWord: ${word}`, {
          body: `Meaning: ${meaning}`,
          icon: 'puneet.jpg'
        });
        notification.onclick = () => {
          setStreakCount((streakCount) => streakCount + 1);
        };
      } else if (Notification.permission !== 'denied') {
       
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(`New Word: ${word}`, {
              body: `Meaning: ${meaning}`,
              icon: 'punnet.jpg'
            });
          }
        });
      }
    }
  };

  return (
    <div>
      
    
      <Words word={currentWord.word} meaning={currentWord.meaning}></Words>
      <StreakCount count={streakCount} />
    </div>
  );
}

function Words(props) {
  return (
    <div>
      <h1>{props.word}</h1>
      <h2>{props.meaning}</h2>
    </div>
  );
}
function StreakCount({ count }) {
  return (
    <div id="streak" className="streak">
      <p>Streak: {count}</p>
    </div>
  );
}


export default App;
