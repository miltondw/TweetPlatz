import "./App.css";
import { Tweet } from "./components/Tweet";
function App() {
  return (
    <div className="App">
      <Tweet
        fullName="Milton Estrada"
        username="miltondw01"
        profilePic="https://picsum.photos/400">
        <p>Hello Word!</p>
        <img src="https://picsum.photos/200" alt="" />
      </Tweet>
      <Tweet
        fullName="Josel Salazar"
        username="yoselaa02"
        profilePic="https://picsum.photos/200">
        <p>What's Happened?</p>
        <img src="https://picsum.photos/320" alt="" />
      </Tweet>
      <Tweet
        fullName="Angel Sanjuan"
        username="angeldes03"
        profilePic="https://picsum.photos/350">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          veritatis est voluptatem praesentium veniam deleniti asperiores aut
          sint doloremque, eos laudantium, sapiente voluptas aliquid tempore et
          numquam a in nihil!
        </p>
      </Tweet>
    </div>
  );
}

export default App;
