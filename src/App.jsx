import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import WordTable from './Components/WordTable';

function App() {
  const [words,setWords]= useState([
  [{"id":"32830","english":"superfluous","transcription":"[suːˈpəːflʊəs]","russian":"чрезмерный","tags":"","tags_json":"[\"\"]"},
    {"id":"32831","english":"spiffing","transcription":"[ˈspɪfɪŋ]","russian":"первоклассная","tags":"idioms","tags_json":"[\"idioms\"]"},
    {"id":"32833","english":"kerfuffle","transcription":"[kəˈfʌfl]","russian":"суматоха","tags":"slang","tags_json":"[\"slang\"]"},
    {"id":"32834","english":"umpteenth","transcription":"[ˌʌm(p)ˈtiːnθ]","russian":"который раз","tags":"hyperbolic emphasis","tags_json":"[\"hyperbolic emphasis\"]"},
    {"id":"32835","english":"stick-to-itiveness","transcription":"[ stɪk tuː itiveness ]","russian":"упорство","tags":"idioms","tags_json":"[\"idioms\"]"},
    {"id":"32837","english":"cromulent","transcription":"[ˈkrɒmjʊlənt]","russian":"приемлемый","tags":"rare vocabulary","tags_json":"[\"rare vocabulary\"]"},
    {"id":"32840","english":"now","transcription":"[naʊ]","russian":"сейчас","tags":"","tags_json":"[\"\"]"},
    {"id":"32842","english":"drunk","transcription":"[drʌŋk]","russian":"пьяный","tags":"","tags_json":"[\"\"]"},
    {"id":"32843","english":"because of you","transcription":"[bɪˈkɔːz ʌv juː]","russian":"из-за тебя","tags":"","tags_json":"[\"\"]"},
    {"id":"32844","english":"queen","transcription":"[kwiːn]","russian":"царица","tags":"","tags_json":"[\"\"]"},
    {"id":"32846","english":" one","transcription":"[wʌn]","russian":"один","tags":"","tags_json":"[\"\"]"},{"id":"32848","english":"look","transcription":"[lʊk]","russian":"взгляд","tags":"","tags_json":"[\"\"]"},
    {"id":"32849","english":"fierce","transcription":"[fɪrs]","russian":"лютый","tags":"","tags_json":"[\"\"]"},
    {"id":"32850","english":"chill down my back","transcription":"[tʃɪl daʊn maɪ bæk]","russian":"холод по спине","tags":"","tags_json":"[\"\"]"},
    {"id":"32852","english":"just","transcription":"[dʒʌst]","russian":"просто","tags":"","tags_json":"[\"\"]"},
    {"id":"32853","english":"curious","transcription":"[ˈkjʊərɪəs]","russian":"любопытная","tags":"newWord","tags_json":"[\"newWord\"]"},
    {"id":"32859","english":"brouhaha","transcription":"[ˈbruːhɑːhɑː]","russian":"шумиха","tags":"slang","tags_json":"[\"slang\"]"},
    {"id":"32864","english":"star","transcription":"[stɑːr]","russian":"звезда","tags":"universe","tags_json":"[\"universe\"]"},
    {"id":"32873","english":"sun","transcription":"[ sʌn ]","russian":"солнце","tags":"universe","tags_json":"[\"universe\"]"},
    {"id":"32874","english":"pony","transcription":"[ˈpəʊnɪ ]","russian":"пони","tags":"animals","tags_json":"[\"animals\"]"},
    {"id":"32886","english":"prank","transcription":"[ præŋk ]","russian":"выходка","tags":"halloween","tags_json":"[\"halloween\"]"},
    {"id":"32887","english":"treat","transcription":"[ triːt ]","russian":"угощение","tags":"halloween","tags_json":"[\"halloween\"]"},
    {"id":"32891","english":"test","transcription":"test","russian":"test","tags":"test","tags_json":"[\"test\"]"}]
]);
  return (
    <>
    <Header/>
    <Footer/>
    <WordTable words={words} setWords={setWords} />
    </>
  )
}

export default App
