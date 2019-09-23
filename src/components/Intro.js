import React from 'react';
import '../styles/intro.css';

const Intro = ({setFirstTime}) => {
  return (
    <div className="table">
      <div className="book">
        <div className="page-top one">
          <img
            className="cover"
            src="http://3.bp.blogspot.com/-tbYB9NjjOWE/UXTDr-oCleI/AAAAAAACHZc/jL6Odw2Ussc/s1600/index_08.jpg"
            alt="A book cover"
          />
          <div className="book-title">
            Not<br/>
            A<br/>
            Fairy Tale
          </div>
          <div  className="book-author">
            written by Raven
          </div>
        </div>

        <div className="page-bottom one-b">
          <img
            className="illustration"
            src="https://www.voyager.od.ua/wp-content/uploads/2016/07/117-1.jpg"
            alt="A castle at a blue mountains"
          />
        </div>

        <div className="page-top two">
          <div className="text">
            &nbsp;Once upon a time, in a faraway country at the very blue
            mountains, there were a prince and a princess. <br /><br />&nbsp;Prince
            was strong and handsome and his princess was young
            and beautyful.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom two-b">
          <img
            className="illustration"
            src="http://atmeclub.com.ua/uploads/article/image/777/__________________1.jpg"
            alt="Prince and princess"
          />
        </div>

        <div className="page-top three">
          <div className="text">
            &nbsp;Their country was rich and the prince and his princess
            lived without knowing worries.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom three-b">
          <img
            className="illustration"
            src="https://i.pinimg.com/originals/2f/92/0d/2f920d059a14b79774f5c05614697059.jpg"
            alt="Dark sorccerer and the dragon"
          />
        </div>

        <div className="page-top four">
          <div className="text">
            &nbsp;Faraway from that place an evil sorccerer lived in his
            dark castle. <br /><br />&nbsp;He envied the happyness of nice pair. So
            he persuaded a dragon to kiddnap a princess and bring her
            to the sorccerer's castle.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom four-b">
          <img
            className="illustration"
            src="https://myberloga.at.ua/_bl/0/42806.jpg"
            alt="Princess and her friend swimming in river"
          />
        </div>

        <div className="page-top five">
          <div className="text">
            &nbsp;Once, when the princess and her friend (not a
            girlfriend - they were just friends) went to the river
            for swimming and chatting, and a young prince was nearby
            to watch them up (and what do you think a young princes doing
            if ewerything alright in their kingdom?) a terrible dragon
            fell from the sky and take princess away.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom five-b">
          <img
            className="illustration"
            src="https://myberloga.at.ua/_bl/0/42009.jpg"
            alt="Knite on a bike"
          />
        </div>

        <div className="page-top six">
          <div className="text">
            &nbsp;Without losing a second, prince went home, where he ate well
            and slept well, and then ate again.<br /><br />&nbsp;Then he straddled his horse...
            <br />&nbsp;A horse I said...
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom six-b">
          <img
            className="illustration"
            src="https://img1.liveinternet.ru/images/attach/c/7/96/444/96444279_large_4326608_50853aleni.jpg"
            alt="Prince on a Pegassus"
          />
        </div>

        <div className="page-top seven">
          <div className="text">
            &nbsp;...OK. If you insist... <br /><br />&nbsp;He sewn wings to his horse and
            did not ride but flew to save his princess. He was not worried much, because
            he knew that neither the evil sorcerer nor his dragon knew what the
            young princesses are for.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom seven-b">
          <img
            className="illustration"
            src="https://i.goldvoice.club/0x0/http://spi1uk.itvnet.lv/upload/articles/30/301931/images/Mistika-8-137.jpg"
            alt="Dragon and princess near the dark castle"
          />
        </div>

        <div className="page-top eight">
          <div className="text">
            &nbsp;Meanwhile, the dragon brings the princess to the dark castle. <br />&nbsp;Prince was not
            mistaken, the sorcerer indeed didn't know what to do next. Nobody knows why he
            kiddnaped princess even sorccerer himself. Maybe he done so because of his suicidal
            tendencies... You remember that the prince was strong enough to destroy the
            sorcerer for such antics.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom eight-b">
          <img
            className="illustration"
            src="https://img4.goodfon.ru/wallpaper/nbig/b/44/oota-youjo-art-anime-svechi-temnitsa-fonar-reshotka-devochka.jpg"
            alt="Princess in a dungeon"
          />
        </div>

        <div className="page-top nine">
          <div className="text">
            &nbsp;So the sorccerer put the princess in the highest tower and began to wait for prince.
            <br /><br />&nbsp;On the way to the princess' dungeon he set three times three doors and put a
            dragon near each door to guard it. Each door has a magic lock. This lock
            could only be opened if somebody choose the right combination for numbers.
          </div>

          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Skip Intro >>>
          </div>
        </div>

        <div className="page-bottom nine-b">
          <img
            className="illustration"
            src="https://winners-games.ru/wp-content/uploads/2017/09/Dranglik.jpg"
            alt="Prince near the dark castle"
          />
        </div>

        <div className="page-top ten">
          <div className="text">
            &nbsp;In a week or so prince came to the sorccerer's dark castle.
            <br /><br />&nbsp;And this is were our story starts...
          </div>
          <div className="hint">
            <u>Remember this hint:</u>
            <br />Green is Good
            <br />and
            <br />Red for Bad
          </div>
          <div
            className="startBtn"
            onClick={() => setFirstTime(false)}
          >
            Start >>>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
